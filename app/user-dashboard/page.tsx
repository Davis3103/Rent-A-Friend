import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MessageCircle, Clock, Star, Search, User, LogOut } from "lucide-react"
import Link from "next/link"

export default function UserDashboard() {
  const upcomingBookings = [
    {
      id: 1,
      friendName: "Priya Sharma",
      friendImage: "/placeholder.svg?height=40&width=40",
      activity: "City Tour",
      date: "Dec 25, 2024",
      time: "2:00 PM - 6:00 PM",
      status: "confirmed",
      location: "Mumbai",
    },
    {
      id: 2,
      friendName: "Amit Patel",
      friendImage: "/placeholder.svg?height=40&width=40",
      activity: "Coffee & Chat",
      date: "Dec 28, 2024",
      time: "10:00 AM - 12:00 PM",
      status: "pending",
      location: "Delhi",
    },
  ]

  const recentBookings = [
    {
      id: 3,
      friendName: "Anjali Singh",
      friendImage: "/placeholder.svg?height=40&width=40",
      activity: "Movie Night",
      date: "Dec 20, 2024",
      rating: 5,
      status: "completed",
    },
    {
      id: 4,
      friendName: "Rahul Verma",
      friendImage: "/placeholder.svg?height=40&width=40",
      activity: "Hiking",
      date: "Dec 18, 2024",
      rating: 4,
      status: "completed",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">User Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/search">
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Find Friends
                </Button>
              </Link>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
          <p className="text-gray-600">Here's what's happening with your bookings.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Upcoming</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                  <p className="text-2xl font-bold text-gray-900">4.8</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageCircle className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Messages</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Bookings */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Bookings</CardTitle>
              <CardDescription>Your scheduled friend activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={booking.friendImage || "/placeholder.svg"} />
                      <AvatarFallback>
                        {booking.friendName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{booking.friendName}</p>
                      <p className="text-sm text-gray-500">{booking.activity}</p>
                      <p className="text-xs text-gray-400">
                        {booking.date} • {booking.time}
                      </p>
                      <p className="text-xs text-gray-400">{booking.location}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>{booking.status}</Badge>
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

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your completed bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={booking.friendImage || "/placeholder.svg"} />
                      <AvatarFallback>
                        {booking.friendName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{booking.friendName}</p>
                      <p className="text-sm text-gray-500">{booking.activity}</p>
                      <p className="text-xs text-gray-400">{booking.date}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <div className="flex items-center">
                        {[...Array(booking.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/search">
                <Button className="w-full h-20 flex flex-col">
                  <Search className="h-6 w-6 mb-2" />
                  Find New Friends
                </Button>
              </Link>
              <Link href="/chat">
                <Button variant="outline" className="w-full h-20 flex flex-col bg-transparent">
                  <MessageCircle className="h-6 w-6 mb-2" />
                  View Messages
                </Button>
              </Link>
              <Button variant="outline" className="w-full h-20 flex flex-col bg-transparent">
                <User className="h-6 w-6 mb-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
