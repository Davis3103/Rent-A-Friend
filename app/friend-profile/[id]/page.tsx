import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Calendar, Clock, Heart, MessageCircle, ArrowLeft, Shield, Award } from "lucide-react"
import Link from "next/link"

export default function FriendProfilePage() {
  const friend = {
    id: 1,
    name: "Priya Sharma",
    image: "/placeholder.svg?height=400&width=400",
    age: 28,
    city: "Mumbai",
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 1500,
    responseTime: "Within 30 minutes",
    joinDate: "January 2023",
    verified: true,
    languages: ["English", "Hindi", "Marathi"],
    interests: ["Photography", "Food Tours", "Historical Sites", "Art Galleries", "Street Food", "Bollywood"],
    description:
      "Namaste! I'm Priya, a professional photographer and Mumbai native who loves showing people around this vibrant city. I've been living here for over 10 years and know all the hidden gems, best photo spots, and incredible local eateries that tourists usually miss. Whether you want to explore iconic landmarks, discover street art in Bandra, or find the perfect chai stall, I'm your guide! I'm passionate about connecting with people from different cultures and creating memorable experiences together.",
    availability: {
      monday: "9 AM - 6 PM",
      tuesday: "9 AM - 6 PM",
      wednesday: "Not available",
      thursday: "9 AM - 6 PM",
      friday: "9 AM - 8 PM",
      saturday: "10 AM - 8 PM",
      sunday: "10 AM - 6 PM",
    },
    services: [
      { name: "Mumbai Photography Tour", price: 2500, duration: "3 hours" },
      { name: "Street Food Walk", price: 1800, duration: "2 hours" },
      { name: "Historical Site Visit", price: 1500, duration: "2-4 hours" },
      { name: "Chai & Chat", price: 1200, duration: "1-2 hours" },
    ],
  }

  const reviews = [
    {
      id: 1,
      userName: "Amit Patel",
      userImage: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "December 2024",
      comment:
        "Priya was absolutely amazing! She showed me parts of Mumbai I never would have found on my own. Her photography skills are incredible and she got some great shots of me at iconic spots. Highly recommend!",
    },
    {
      id: 2,
      userName: "Sneha Reddy",
      userImage: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "November 2024",
      comment:
        "Had the best food tour with Priya! She knows all the local spots and the stories behind them. Great conversation and felt like hanging out with a longtime friend.",
    },
    {
      id: 3,
      userName: "Rahul Verma",
      userImage: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "November 2024",
      comment:
        "Really enjoyed our historical site visit. Priya is very knowledgeable about history and made the experience much more engaging than going alone.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/search" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Search
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={friend.image || "/placeholder.svg"}
                      alt={friend.name}
                      className="w-48 h-48 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <h1 className="text-3xl font-bold text-gray-900 mr-3">{friend.name}</h1>
                          {friend.verified && (
                            <Badge className="bg-blue-100 text-blue-800">
                              <Shield className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {friend.city} • Age {friend.age}
                        </div>
                        <div className="flex items-center mb-4">
                          <div className="flex items-center mr-4">
                            <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                            <span className="font-semibold">{friend.rating}</span>
                            <span className="text-gray-500 ml-1">({friend.reviewCount} reviews)</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">Responds {friend.responseTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-green-600">₹{friend.hourlyRate}</p>
                        <p className="text-sm text-gray-500">per hour</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">Languages</h3>
                      <div className="flex gap-2">
                        {friend.languages.map((language) => (
                          <Badge key={language} variant="outline">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {friend.interests.map((interest) => (
                          <Badge key={interest} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="availability">Availability</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <Card>
                  <CardHeader>
                    <CardTitle>About Priya</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{friend.description}</p>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Award className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-blue-900">Member since {friend.joinDate}</span>
                      </div>
                      <p className="text-sm text-blue-700">
                        Priya has been creating amazing experiences for visitors and locals alike!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <Card>
                  <CardHeader>
                    <CardTitle>Services Offered</CardTitle>
                    <CardDescription>Choose from Priya's curated experiences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {friend.services.map((service, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{service.name}</h4>
                            <p className="text-sm text-gray-600">Duration: {service.duration}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-green-600">₹{service.price}/hr</p>
                            <Link href={`/booking/${friend.id}?service=${encodeURIComponent(service.name)}`}>
                              <Button size="sm">Book Now</Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="availability">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Availability</CardTitle>
                    <CardDescription>Priya's typical schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(friend.availability).map(([day, hours]) => (
                        <div key={day} className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="font-medium capitalize">{day}</span>
                          <span className={`text-sm ${hours === "Not available" ? "text-red-600" : "text-green-600"}`}>
                            {hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> Availability may vary. Please check when booking for specific dates.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Reviews ({friend.reviewCount})</CardTitle>
                    <CardDescription>What people are saying about Priya</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src={review.userImage || "/placeholder.svg"} />
                              <AvatarFallback>
                                {review.userName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">{review.userName}</h4>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Book with Priya</CardTitle>
                <CardDescription>Start planning your experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">₹{friend.hourlyRate}/hour</p>
                    <p className="text-sm text-green-700">Starting rate</p>
                  </div>

                  <Link href={`/booking/${friend.id}`}>
                    <Button className="w-full" size="lg">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  </Link>

                  <Button variant="outline" className="w-full bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Quick Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response time:</span>
                        <span>{friend.responseTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total reviews:</span>
                        <span>{friend.reviewCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Member since:</span>
                        <span>{friend.joinDate}</span>
                      </div>
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
