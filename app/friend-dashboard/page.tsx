import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Calendar, DollarSign, Star, MessageCircle, User, LogOut, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function FriendDashboard() {
  const pendingRequests = [
    {
      id: 1,
      userName: "Arjun Patel",
      userImage: "/placeholder.svg?height=40&width=40",
      activity: "City Tour",
      date: "Dec 25, 2024",
      time: "2:00 PM - 6:00 PM",
      amount: 120,
      location: "Downtown",
    },
    {
      id: 2,
      userName: "Priya Sharma",
      userImage: "/placeholder.svg?height=40&width=40",
      activity: "Coffee & Chat",
      date: "Dec 28, 2024",
      time: "10:00 AM - 12:00 PM",
      amount: 50,
      location: "Central Park",
    },
  ]

  const upcomingBookings = [
    {
      id: 3,
      userName: "Vikram Singh",
      userImage: "/placeholder.svg?height=40&width=40",
      activity: "Movie Night",
      date: "Dec 26, 2024",
      time: "7:00 PM - 10:00 PM",
      amount: 90,
      status: "confirmed",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Friend Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Available</span>
                <Switch defaultChecked />
              </div>
              <Link href="/chat">
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Messages
                </Button>
              </Link>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h2>
          <p className="text-gray-600">Manage your availability and track your earnings.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">₹99,200</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Bookings</p>
                  <p className="text-2xl font-bold text-gray-900">18</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-gray-900">4.9</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Growth</p>
                  <p className="text-2xl font-bold text-gray-900">+23%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Pending Requests
                <Badge variant="secondary">2 new</Badge>
              </CardTitle>
              <CardDescription>Review and respond to booking requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingRequests.map((request) => (
                  <div key={request.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={request.userImage || "/placeholder.svg"} />
                      <AvatarFallback>
                        {request.userName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{request.userName}</p>
                      <p className="text-sm text-gray-500">{request.activity}</p>
                      <p className="text-xs text-gray-400">
                        {request.date} • {request.time}
                      </p>
                      <p className="text-xs text-gray-400">{request.location}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-sm font-semibold text-green-600">₹{request.amount}</p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Decline
                        </Button>
                        <Button size="sm">Accept</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Bookings */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Bookings</CardTitle>
              <CardDescription>Your confirmed appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={booking.userImage || "/placeholder.svg"} />
                      <AvatarFallback>
                        {booking.userName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{booking.userName}</p>
                      <p className="text-sm text-gray-500">{booking.activity}</p>
                      <p className="text-xs text-gray-400">
                        {booking.date} • {booking.time}
                      </p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-sm font-semibold text-green-600">₹{booking.amount}</p>
                      <Badge variant="default">Confirmed</Badge>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Chat
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Earnings Overview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Earnings Overview</CardTitle>
            <CardDescription>Your financial performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">₹3,24,000</p>
                <p className="text-sm text-gray-600">Total Earnings</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">₹24,000</p>
                <p className="text-sm text-gray-600">Pending Payout</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">₹320</p>
                <p className="text-sm text-gray-600">Avg per Hour</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button className="w-full h-20 flex flex-col">
                <Calendar className="h-6 w-6 mb-2" />
                Manage Availability
              </Button>
              <Button variant="outline" className="w-full h-20 flex flex-col bg-transparent">
                <User className="h-6 w-6 mb-2" />
                Edit Profile
              </Button>
              <Button variant="outline" className="w-full h-20 flex flex-col bg-transparent">
                <DollarSign className="h-6 w-6 mb-2" />
                View Earnings
              </Button>
              <Link href="/chat">
                <Button variant="outline" className="w-full h-20 flex flex-col bg-transparent">
                  <MessageCircle className="h-6 w-6 mb-2" />
                  Messages
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
