"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera, Html } from "@react-three/drei"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Home, Maximize2, Info } from "lucide-react"

interface VirtualTour3DProps {
  propertyTitle: string
  propertyType: string
}

function Room({ position, size, color, label }: any) {
  const [hovered, setHovered] = useState(false)

  return (
    <group position={position}>
      <mesh onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={hovered ? "#3b82f6" : color} transparent opacity={0.3} wireframe={false} />
      </mesh>
      {/* Floor */}
      <mesh position={[0, -size[1] / 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[size[0], size[2]]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
      {/* Room label */}
      {hovered && (
        <Html position={[0, size[1] / 2 + 1, 0]} center>
          <Badge className="bg-primary text-primary-foreground">{label}</Badge>
        </Html>
      )}
    </group>
  )
}

function PropertyScene({ propertyType }: { propertyType: string }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[15, 8, 15]} />
      <OrbitControls enablePan enableZoom enableRotate minDistance={5} maxDistance={40} maxPolarAngle={Math.PI / 2.1} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-10, 10, -5]} intensity={0.5} />

      <Environment preset="apartment" />

      {/* Living Room */}
      <Room position={[0, 1.5, 0]} size={[8, 3, 6]} color="#dbeafe" label="Living Room" />

      {/* Kitchen */}
      <Room position={[0, 1.5, -8]} size={[6, 3, 4]} color="#fef3c7" label="Kitchen" />

      {/* Master Bedroom */}
      <Room position={[9, 1.5, 0]} size={[6, 3, 6]} color="#e0e7ff" label="Master Bedroom" />

      {/* Bedroom 2 */}
      <Room position={[9, 1.5, -8]} size={[5, 3, 4]} color="#e0e7ff" label="Bedroom 2" />

      {/* Bathroom */}
      <Room position={[-6, 1.5, 0]} size={[4, 3, 4]} color="#ddd6fe" label="Bathroom" />

      {/* Base ground */}
      <mesh position={[0, 0, -2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#9ca3af" opacity={0.3} transparent />
      </mesh>
    </>
  )
}

export function VirtualTour3D({ propertyTitle, propertyType }: VirtualTour3DProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={isFullscreen ? "fixed inset-0 z-50 bg-background" : "relative"}>
      <div
        className={`relative ${isFullscreen ? "h-screen" : "h-[500px]"} w-full bg-gradient-to-b from-slate-100 to-slate-200 rounded-lg overflow-hidden`}
      >
        <Canvas shadows>
          <PropertyScene propertyType={propertyType} />
        </Canvas>

        {/* Controls overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between pointer-events-none">
          <div className="bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg pointer-events-auto">
            <div className="flex items-center gap-2 mb-2">
              <Home className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">3D Virtual Tour</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Click and drag to rotate • Scroll to zoom • Right-click to pan
            </p>
          </div>

          <div className="flex gap-2 pointer-events-auto">
            <Button
              size="icon"
              variant="secondary"
              onClick={toggleFullscreen}
              className="bg-background/95 backdrop-blur-sm shadow-lg"
            >
              {isFullscreen ? <X className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Info overlay */}
        <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg pointer-events-none">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Hover over rooms to see labels</p>
          </div>
        </div>
      </div>
    </div>
  )
}
