"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Bell, Mail, MessageSquare, Smartphone, Save } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function EmailAlertsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [settings, setSettings] = useState({
    newListings: true,
    priceChanges: true,
    openHomes: false,
    marketReports: true,
    newsUpdates: false,
    frequency: "instant",
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  })

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  const updateSetting = (key: string, value: boolean | string) => {
    setSettings({ ...settings, [key]: value })
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Email Alerts & Notifications</h1>
          <p className="text-slate-600">Customize how and when you receive property updates</p>
        </div>

        <div className="space-y-6">
          {/* Alert Types */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Alert Types
              </CardTitle>
              <CardDescription>Choose which property updates you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="newListings" className="text-base font-medium">
                    New Listings
                  </Label>
                  <p className="text-sm text-slate-500">
                    Get notified when properties matching your searches are listed
                  </p>
                </div>
                <Switch
                  id="newListings"
                  checked={settings.newListings}
                  onCheckedChange={(checked) => updateSetting("newListings", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="priceChanges" className="text-base font-medium">
                    Price Changes
                  </Label>
                  <p className="text-sm text-slate-500">Alerts when saved properties change price</p>
                </div>
                <Switch
                  id="priceChanges"
                  checked={settings.priceChanges}
                  onCheckedChange={(checked) => updateSetting("priceChanges", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="openHomes" className="text-base font-medium">
                    Open Home Reminders
                  </Label>
                  <p className="text-sm text-slate-500">Reminders for upcoming open homes on saved properties</p>
                </div>
                <Switch
                  id="openHomes"
                  checked={settings.openHomes}
                  onCheckedChange={(checked) => updateSetting("openHomes", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketReports" className="text-base font-medium">
                    Market Reports
                  </Label>
                  <p className="text-sm text-slate-500">Monthly market insights and trends in your areas of interest</p>
                </div>
                <Switch
                  id="marketReports"
                  checked={settings.marketReports}
                  onCheckedChange={(checked) => updateSetting("marketReports", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="newsUpdates" className="text-base font-medium">
                    News & Updates
                  </Label>
                  <p className="text-sm text-slate-500">Company news, tips, and real estate insights</p>
                </div>
                <Switch
                  id="newsUpdates"
                  checked={settings.newsUpdates}
                  onCheckedChange={(checked) => updateSetting("newsUpdates", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notification Frequency */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Frequency</CardTitle>
              <CardDescription>How often would you like to receive alerts?</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={settings.frequency} onValueChange={(value) => updateSetting("frequency", value)}>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <RadioGroupItem value="instant" id="instant" />
                  <Label htmlFor="instant" className="flex-1 cursor-pointer">
                    <span className="font-medium">Instant</span>
                    <p className="text-sm text-slate-500">
                      Receive alerts immediately when properties match your criteria
                    </p>
                  </Label>
                  <Badge variant="secondary">Recommended</Badge>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily" className="flex-1 cursor-pointer">
                    <span className="font-medium">Daily Digest</span>
                    <p className="text-sm text-slate-500">One email per day with all matching properties</p>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly" className="flex-1 cursor-pointer">
                    <span className="font-medium">Weekly Summary</span>
                    <p className="text-sm text-slate-500">Weekly roundup of new properties and updates</p>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Notification Channels */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Channels</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <div className="space-y-0.5">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-slate-500">john.doe@example.com</p>
                  </div>
                </div>
                <Switch
                  id="email"
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => updateSetting("emailNotifications", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-slate-400" />
                  <div className="space-y-0.5">
                    <Label htmlFor="sms" className="text-base font-medium">
                      SMS Notifications
                    </Label>
                    <p className="text-sm text-slate-500">021 123 4567</p>
                  </div>
                </div>
                <Switch
                  id="sms"
                  checked={settings.smsNotifications}
                  onCheckedChange={(checked) => updateSetting("smsNotifications", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-slate-400" />
                  <div className="space-y-0.5">
                    <Label htmlFor="push" className="text-base font-medium">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-slate-500">Mobile app notifications</p>
                  </div>
                </div>
                <Switch
                  id="push"
                  checked={settings.pushNotifications}
                  onCheckedChange={(checked) => updateSetting("pushNotifications", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSave} disabled={isSaving} className="gap-2">
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Save Preferences"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
