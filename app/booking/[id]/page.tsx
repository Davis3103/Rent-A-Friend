"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, ArrowLeft, Shield, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [duration, setDuration] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [showOTP, setShowOTP] = useState(false)
  const [otp, setOtp] = useState("")

  const friend = {
    id: 1,
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 35,
    city: "Mumbai",
    responseTime: "Within 1 hour",
  }

  const services = [
    { name: "City Photography Tour", price: 3000, duration: "3 hours" },
    { name: "Food & Culture Walk", price: 2500, duration: "2 hours" },
    { name: "Museum Companion", price: 2000, duration: "2-4 hours" },
    { name: "Coffee & Conversation", price: 1500, duration: "1-2 hours" },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ]

  const calculateTotal = () => {
    const service = services.find((s) => s.name === selectedService)
    const baseRate = service ? service.price : friend.hourlyRate
    const hours = duration ? Number.parseInt(duration) : 1
    const subtotal = baseRate * hours
    const platformFee = subtotal * 0.1
    const total = subtotal + platformFee
    return { subtotal, platformFee, total }
  }

  const handleBooking = () => {
    setShowOTP(true)
  }

  const handleOTPVerification = () => {
    // Handle OTP verification logic here
    alert("Booking confirmed! You will receive a confirmation email shortly.")
  }

  const { subtotal, platformFee, total } = calculateTotal()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={`/friend-profile/${friend.id}`} className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Profile
            </Link>
            <h1 className="text-xl font-semibold text-gray-900">Book Experience</h1>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            {!showOTP ? (
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Experience</CardTitle>
                  <CardDescription>Fill in the details for your booking with Sarah</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <Label>Select Service</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.name} value={service.name}>
                            {service.name} - ₹{service.price}/hr ({service.duration})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <Label htmlFor="date">Select Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="mt-1"
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <Label>Select Time</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose start time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Duration */}
                  <div>
                    <Label>Duration (hours)</Label>
                    <Select value={duration} onValueChange={setDuration}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hour</SelectItem>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="3">3 hours</SelectItem>
                        <SelectItem value="4">4 hours</SelectItem>
                        <SelectItem value="6">6 hours</SelectItem>
                        <SelectItem value="8">8 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Meeting Location */}
                  <div>
                    <Label htmlFor="location">Meeting Location</Label>
                    <Input
                      id="location"
                      placeholder="Enter meeting point (e.g., Gateway of India, Marine Drive)"
                      className="mt-1"
                    />
                  </div>

                  {/* Special Requests */}
                  <div>
                    <Label htmlFor="requests">Special Requests (Optional)</Label>
                    <Textarea
                      id="requests"
                      placeholder="Any specific requests or things Sarah should know about?"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 9876543210" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="emergency">Emergency Contact</Label>
                      <Input id="emergency" type="tel" placeholder="+91 8765432109" className="mt-1" />
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleBooking}
                    disabled={!selectedDate || !selectedTime || !duration}
                  >
                    Proceed to Payment
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Verify Your Booking</CardTitle>
                  <CardDescription>Enter the OTP sent to your phone to confirm</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Security Verification</h3>
                    <p className="text-sm text-gray-600">
                      We've sent a 6-digit code to your phone number for security purposes.
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="otp">Enter OTP Code</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="123456"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      className="mt-1 text-center text-lg tracking-widest"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowOTP(false)}>
                      Back to Booking
                    </Button>
                    <Button className="flex-1" onClick={handleOTPVerification} disabled={otp.length !== 6}>
                      Confirm Booking
                    </Button>
                  </div>

                  <div className="text-center">
                    <Button variant="link" className="text-sm">
                      Didn't receive the code? Resend
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Friend Info */}
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={friend.image || "/placeholder.svg"} />
                    <AvatarFallback>
                      {friend.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{friend.name}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      {friend.city}
                    </div>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="space-y-3">
                  {selectedService && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Service:</span>
                      <span className="text-sm font-medium">{selectedService}</span>
                    </div>
                  )}
                  {selectedDate && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Date:</span>
                      <span className="text-sm font-medium">{new Date(selectedDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  {selectedTime && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Time:</span>
                      <span className="text-sm font-medium">{selectedTime}</span>
                    </div>
                  )}
                  {duration && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="text-sm font-medium">
                        {duration} hour{duration !== "1" ? "s" : ""}
                      </span>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                {duration && (
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Subtotal:</span>
                      <span className="text-sm">₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Platform fee:</span>
                      <span className="text-sm">₹{platformFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                      <span>Total:</span>
                      <span className="text-green-600">₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                )}

                {/* Safety Notice */}
                <div className="mt-6 p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div className="text-xs text-yellow-800">
                      <p className="font-medium mb-1">Safety First</p>
                      <p>
                        Always meet in public places and trust your instincts. Report any concerns to our support team.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
