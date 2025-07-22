"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [userType, setUserType] = useState<"user" | "friend">("user")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Rent a Friend</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <Tabs value={isLogin ? "login" : "signup"} onValueChange={(value) => setIsLogin(value === "login")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            {isLogin ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Button className="w-full">Login</Button>
                <div className="text-center">
                  <Link href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* User Type Selection */}
                <div className="space-y-3">
                  <Label>I want to:</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={userType === "user" ? "default" : "outline"}
                      onClick={() => setUserType("user")}
                      className="h-auto p-4 flex flex-col"
                    >
                      <span className="font-semibold">Find Friends</span>
                      <span className="text-xs opacity-70">Book companions</span>
                    </Button>
                    <Button
                      variant={userType === "friend" ? "default" : "outline"}
                      onClick={() => setUserType("friend")}
                      className="h-auto p-4 flex flex-col"
                    >
                      <span className="font-semibold">Be a Friend</span>
                      <span className="text-xs opacity-70">Earn money</span>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 (XXX) XXX-XXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
                </div>

                {userType === "friend" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="aadhaar">Aadhaar Card Number</Label>
                      <Input id="aadhaar" type="text" placeholder="XXXX-XXXX-XXXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pan">PAN Card Number</Label>
                      <Input id="pan" type="text" placeholder="ABCDE1234F" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idDocument">ID Document Upload</Label>
                      <Input id="idDocument" type="file" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hourlyRate">Hourly Rate (₹)</Label>
                      <Input id="hourlyRate" type="number" placeholder="500" />
                    </div>
                  </>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
                </div>
                <Button className="w-full">Create {userType === "user" ? "User" : "Friend"} Account</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
