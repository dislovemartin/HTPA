"use client"

import { useState } from "react"
import { User, Bell, Lock, CreditCard, HelpCircle, Save, X, Shield, Smartphone, LogOut, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  const [openSheet, setOpenSheet] = useState(false)

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-50">Settings</h1>
          <p className="text-primary-600 dark:text-primary-400">Manage your account settings and preferences.</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=JD" alt="John Doe" />
                    <AvatarFallback className="text-xl bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold text-primary-900 dark:text-primary-50">John Doe</h2>
                  <p className="text-primary-600 dark:text-primary-400 mb-4">Product Manager</p>
                  <Badge className="mb-4">Admin</Badge>
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="space-y-1">
                  <p className="text-sm font-medium text-primary-700 dark:text-primary-300">Email</p>
                  <p className="text-sm text-primary-600 dark:text-primary-400">john.doe@example.com</p>
                </div>
                <div className="space-y-1 mt-4">
                  <p className="text-sm font-medium text-primary-700 dark:text-primary-300">Member Since</p>
                  <p className="text-sm text-primary-600 dark:text-primary-400">March 15, 2021</p>
                </div>
                <div className="space-y-1 mt-4">
                  <p className="text-sm font-medium text-primary-700 dark:text-primary-300">Last Login</p>
                  <p className="text-sm text-primary-600 dark:text-primary-400">Today at 9:30 AM</p>
                </div>

                <Separator className="my-6" />

                <Button variant="destructive" className="w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="hidden sm:inline">Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span className="hidden sm:inline">Security</span>
                </TabsTrigger>
                <TabsTrigger value="billing" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden sm:inline">Billing</span>
                </TabsTrigger>
                <TabsTrigger value="help" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Help</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal information and public profile.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-primary-700 dark:text-primary-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="John Doe"
                          className="border-primary-200 dark:border-primary-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-primary-700 dark:text-primary-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          defaultValue="john.doe@example.com"
                          className="border-primary-200 dark:border-primary-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-primary-700 dark:text-primary-300">
                          Username
                        </Label>
                        <Input
                          id="username"
                          defaultValue="johndoe"
                          className="border-primary-200 dark:border-primary-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-primary-700 dark:text-primary-300">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          defaultValue="+1 (555) 123-4567"
                          className="border-primary-200 dark:border-primary-800"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-primary-700 dark:text-primary-300">
                        Bio
                      </Label>
                      <textarea
                        id="bio"
                        rows={4}
                        className="w-full min-h-[100px] rounded-md border border-primary-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-primary-800 dark:bg-primary-950 dark:ring-offset-primary-950 dark:placeholder:text-primary-500 dark:focus-visible:ring-primary-400"
                        defaultValue="Product manager with 5+ years of experience in SaaS products."
                      ></textarea>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="website" className="text-primary-700 dark:text-primary-300">
                          Website
                        </Label>
                        <Input
                          id="website"
                          defaultValue="https://example.com"
                          className="border-primary-200 dark:border-primary-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-primary-700 dark:text-primary-300">
                          Location
                        </Label>
                        <Input
                          id="location"
                          defaultValue="San Francisco, CA"
                          className="border-primary-200 dark:border-primary-800"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t border-primary-100 dark:border-primary-900 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how and when you receive notifications.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-primary-900 dark:text-primary-100">
                        Email Notifications
                      </h3>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-primary-50 dark:bg-primary-900">
                        <div className="space-y-0.5">
                          <h4 className="text-base font-medium text-primary-900 dark:text-primary-100">
                            Email Notifications
                          </h4>
                          <p className="text-sm text-primary-600 dark:text-primary-400">
                            Receive email notifications for important updates.
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-secondary-50 dark:bg-secondary-900">
                        <div className="space-y-0.5">
                          <h4 className="text-base font-medium text-primary-900 dark:text-primary-100">
                            Project Updates
                          </h4>
                          <p className="text-sm text-primary-600 dark:text-primary-400">
                            Get notified when projects are updated or completed.
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-secondary-50 dark:bg-secondary-900">
                        <div className="space-y-0.5">
                          <h4 className="text-base font-medium text-primary-900 dark:text-primary-100">
                            Team Messages
                          </h4>
                          <p className="text-sm text-primary-600 dark:text-primary-400">
                            Receive notifications for new team messages.
                          </p>
                        </div>
                        <Switch />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-secondary-50 dark:bg-secondary-900">
                        <div className="space-y-0.5">
                          <h4 className="text-base font-medium text-primary-900 dark:text-primary-100">
                            Marketing Updates
                          </h4>
                          <p className="text-sm text-primary-600 dark:text-primary-400">
                            Receive marketing and promotional emails.
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-primary-900 dark:text-primary-100">Push Notifications</h3>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-primary-50 dark:bg-primary-900">
                        <div className="space-y-0.5">
                          <h4 className="text-base font-medium text-primary-900 dark:text-primary-100">
                            Push Notifications
                          </h4>
                          <p className="text-sm text-primary-600 dark:text-primary-400">
                            Receive push notifications on your devices.
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-secondary-50 dark:bg-secondary-900">
                        <div className="space-y-0.5">
                          <h4 className="text-base font-medium text-primary-900 dark:text-primary-100">
                            Critical Alerts
                          </h4>
                          <p className="text-sm text-primary-600 dark:text-primary-400">
                            Get notified about critical system alerts.
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t border-primary-100 dark:border-primary-900 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Preferences</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Change Password</CardTitle>
                      <CardDescription>Update your password to keep your account secure.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password" className="text-primary-700 dark:text-primary-300">
                          Current Password
                        </Label>
                        <Input
                          id="current-password"
                          type="password"
                          className="border-primary-200 dark:border-primary-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password" className="text-primary-700 dark:text-primary-300">
                          New Password
                        </Label>
                        <Input
                          id="new-password"
                          type="password"
                          className="border-primary-200 dark:border-primary-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-primary-700 dark:text-primary-300">
                          Confirm New Password
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          className="border-primary-200 dark:border-primary-800"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2 border-t border-primary-100 dark:border-primary-900 pt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button>Update Password</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Two-Factor Authentication</CardTitle>
                      <CardDescription>Add an extra layer of security to your account.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between p-4 rounded-lg bg-primary-50 dark:bg-primary-900">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-800">
                            <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-base font-medium text-primary-900 dark:text-primary-100">
                              Two-Factor Authentication
                            </h4>
                            <p className="text-sm text-primary-600 dark:text-primary-400">
                              Protect your account with an additional security layer.
                            </p>
                          </div>
                        </div>
                        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                          <SheetTrigger asChild>
                            <Button variant="outline">Setup 2FA</Button>
                          </SheetTrigger>
                          <SheetContent className="sm:max-w-md">
                            <SheetHeader>
                              <SheetTitle>Two-Factor Authentication</SheetTitle>
                              <SheetDescription>Secure your account with two-factor authentication.</SheetDescription>
                            </SheetHeader>
                            <div className="py-6 space-y-6">
                              <div className="flex justify-center">
                                <div className="bg-white p-4 rounded-lg border border-primary-200">
                                  <div className="w-48 h-48 bg-primary-50 flex items-center justify-center">
                                    <span className="text-sm text-primary-500">QR Code Placeholder</span>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="verification-code" className="text-primary-700 dark:text-primary-300">
                                  Verification Code
                                </Label>
                                <Input
                                  id="verification-code"
                                  placeholder="Enter 6-digit code"
                                  className="border-primary-200 dark:border-primary-800"
                                />
                              </div>
                              <div className="space-y-2 bg-info-50 dark:bg-info-950 p-4 rounded-lg border border-info-200 dark:border-info-900">
                                <h4 className="text-sm font-medium text-info-800 dark:text-info-300 flex items-center">
                                  <Smartphone className="h-4 w-4 mr-2" />
                                  Important
                                </h4>
                                <p className="text-sm text-info-700 dark:text-info-400">
                                  Scan the QR code with your authenticator app and enter the verification code to enable
                                  2FA. Keep your backup codes in a safe place.
                                </p>
                              </div>
                            </div>
                            <SheetFooter>
                              <Button variant="outline" onClick={() => setOpenSheet(false)}>
                                <X className="mr-2 h-4 w-4" />
                                Cancel
                              </Button>
                              <Button onClick={() => setOpenSheet(false)}>
                                <Save className="mr-2 h-4 w-4" />
                                Verify and Enable
                              </Button>
                            </SheetFooter>
                          </SheetContent>
                        </Sheet>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Active Sessions</CardTitle>
                      <CardDescription>Manage your active sessions across devices.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-800">
                            <Smartphone className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div>
                            <p className="font-medium text-primary-900 dark:text-primary-100">Current Session</p>
                            <p className="text-sm text-primary-600 dark:text-primary-400">
                              San Francisco, CA • Chrome on macOS
                            </p>
                            <p className="text-xs text-primary-500 dark:text-primary-500 mt-1">
                              IP: 192.168.1.1 • Last active: Just now
                            </p>
                          </div>
                        </div>
                        <Badge variant="success">Active Now</Badge>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg border-primary-200 dark:border-primary-800">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800">
                            <Smartphone className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                          </div>
                          <div>
                            <p className="font-medium text-primary-900 dark:text-primary-100">Mobile App</p>
                            <p className="text-sm text-primary-600 dark:text-primary-400">San Francisco, CA • iOS 16</p>
                            <p className="text-xs text-primary-500 dark:text-primary-500 mt-1">
                              IP: 192.168.1.2 • Last active: 3 days ago
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-error-600 dark:text-error-400 border-error-200 dark:border-error-800 hover:bg-error-50 dark:hover:bg-error-950"
                        >
                          Revoke
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="billing">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Subscription Plan</CardTitle>
                      <CardDescription>Manage your subscription and billing details.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-accent-100 to-accent-50 dark:from-accent-900 dark:to-accent-950 border border-accent-200 dark:border-accent-800">
                        <div>
                          <Badge variant="accent" className="mb-2">
                            Current Plan
                          </Badge>
                          <h3 className="text-xl font-bold text-primary-900 dark:text-primary-50">Professional</h3>
                          <p className="text-primary-600 dark:text-primary-400">$29/month • Billed monthly</p>
                          <ul className="mt-2 space-y-1 text-sm text-primary-700 dark:text-primary-300">
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-success-500" /> Unlimited projects
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-success-500" /> Advanced analytics
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-success-500" /> Priority support
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button variant="outline">Change Plan</Button>
                          <Button
                            variant="ghost"
                            className="text-error-600 dark:text-error-400 hover:bg-error-50 dark:hover:bg-error-950 hover:text-error-700 dark:hover:text-error-300"
                          >
                            Cancel Subscription
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                      <CardDescription>Manage your payment methods and billing information.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg border-primary-200 dark:border-primary-800">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-16 rounded bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-sm font-medium text-primary-800 dark:text-primary-200">
                            VISA
                          </div>
                          <div>
                            <p className="font-medium text-primary-900 dark:text-primary-100">Visa ending in 4242</p>
                            <p className="text-sm text-primary-600 dark:text-primary-400">Expires 12/2025</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">Default</Badge>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Add Payment Method
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Billing History</CardTitle>
                      <CardDescription>View and download your past invoices.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-4 border-b border-primary-100 dark:border-primary-900 hover:bg-primary-50 dark:hover:bg-primary-900/50 rounded-t-lg">
                          <div>
                            <p className="font-medium text-primary-900 dark:text-primary-100">Apr 1, 2023</p>
                            <p className="text-sm text-primary-600 dark:text-primary-400">
                              Professional Plan • Monthly
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-primary-900 dark:text-primary-100">$29.00</p>
                            <Button
                              variant="link"
                              size="sm"
                              className="h-auto p-0 text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100"
                            >
                              Download
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border-b border-primary-100 dark:border-primary-900 hover:bg-primary-50 dark:hover:bg-primary-900/50">
                          <div>
                            <p className="font-medium text-primary-900 dark:text-primary-100">Mar 1, 2023</p>
                            <p className="text-sm text-primary-600 dark:text-primary-400">
                              Professional Plan • Monthly
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-primary-900 dark:text-primary-100">$29.00</p>
                            <Button
                              variant="link"
                              size="sm"
                              className="h-auto p-0 text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100"
                            >
                              Download
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border-b border-primary-100 dark:border-primary-900 hover:bg-primary-50 dark:hover:bg-primary-900/50 rounded-b-lg">
                          <div>
                            <p className="font-medium text-primary-900 dark:text-primary-100">Feb 1, 2023</p>
                            <p className="text-sm text-primary-600 dark:text-primary-400">
                              Professional Plan • Monthly
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-primary-900 dark:text-primary-100">$29.00</p>
                            <Button
                              variant="link"
                              size="sm"
                              className="h-auto p-0 text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-100"
                            >
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="help">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                      <CardDescription>Find answers to common questions about our platform.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 border rounded-lg border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900">
                        <h4 className="font-medium text-primary-900 dark:text-primary-100">
                          How do I change my password?
                        </h4>
                        <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                          You can change your password in the Security tab of your account settings.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg border-primary-200 dark:border-primary-800">
                        <h4 className="font-medium text-primary-900 dark:text-primary-100">
                          How do I cancel my subscription?
                        </h4>
                        <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                          You can cancel your subscription in the Billing tab of your account settings.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg border-primary-200 dark:border-primary-800">
                        <h4 className="font-medium text-primary-900 dark:text-primary-100">
                          How do I delete my account?
                        </h4>
                        <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                          To delete your account, please contact our support team.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Support</CardTitle>
                      <CardDescription>Get help from our support team.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-primary-700 dark:text-primary-300">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Enter the subject of your inquiry"
                          className="border-primary-200 dark:border-primary-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-primary-700 dark:text-primary-300">
                          Message
                        </Label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full min-h-[100px] rounded-md border border-primary-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-primary-800 dark:bg-primary-950 dark:ring-offset-primary-950 dark:placeholder:text-primary-500 dark:focus-visible:ring-primary-400"
                          placeholder="Describe your issue or question in detail"
                        ></textarea>
                      </div>
                      <Button>Submit Ticket</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
