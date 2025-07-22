import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, ArrowLeft, Search, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click 'Sign Up' on the homepage, choose whether you want to find friends or be a friend, fill in your details, and verify your email. Friends need to complete government ID verification.",
        },
        {
          q: "What documents do I need for verification?",
          a: "You need a valid Aadhaar card, PAN card, and a live selfie. All documents must be clear and readable. Verification typically takes 24-48 hours.",
        },
        {
          q: "Is the platform safe to use?",
          a: "Yes! All friends undergo thorough background verification, government ID checks, and continuous monitoring. We also provide 24/7 safety support.",
        },
      ],
    },
    {
      category: "Bookings & Payments",
      questions: [
        {
          q: "How do I book a friend?",
          a: "Browse friends, select one you like, choose your preferred service, pick date/time, enter meeting location, and complete payment. You'll receive confirmation via SMS and email.",
        },
        {
          q: "What payment methods are accepted?",
          a: "We accept UPI, credit/debit cards, net banking, and popular digital wallets like Paytm, PhonePe, and Google Pay.",
        },
        {
          q: "Can I cancel a booking?",
          a: "Yes! Full refund for cancellations 24+ hours before booking, 50% refund for 12-24 hours before, and no refund for less than 12 hours before booking.",
        },
        {
          q: "How much does the platform charge?",
          a: "We charge a 10% platform fee on all bookings. This covers safety monitoring, verification, customer support, and platform maintenance.",
        },
      ],
    },
    {
      category: "Safety & Security",
      questions: [
        {
          q: "What safety measures are in place?",
          a: "Government ID verification, background checks, 24/7 monitoring, emergency hotline, secure messaging, and detailed safety guidelines for all users.",
        },
        {
          q: "What should I do if I feel unsafe?",
          a: "Contact our emergency hotline immediately at +91 98765 00000. Also inform local police (100) if in immediate danger. Report the incident through our app.",
        },
        {
          q: "How do you verify friends?",
          a: "We verify Aadhaar and PAN cards, conduct background checks, verify live photos, check references, and continuously monitor for any safety concerns.",
        },
      ],
    },
    {
      category: "For Friends",
      questions: [
        {
          q: "How do I become a friend?",
          a: "Sign up as a friend, complete government ID verification, set your hourly rate, create an attractive profile, and wait for approval (24-48 hours).",
        },
        {
          q: "How much can I earn?",
          a: "Friends typically earn ₹500-₹3000 per hour depending on services offered, location, and experience. You keep 90% of earnings after platform fee.",
        },
        {
          q: "When do I get paid?",
          a: "Payments are released 24 hours after booking completion. You can withdraw earnings to your bank account or UPI instantly.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">Rent a Friend India</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/">
                <Button variant="ghost">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions or get in touch with our support team
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search for help..." className="pl-10" />
          </div>
        </div>

        {/* Quick Contact */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our support team</p>
              <p className="font-semibold text-blue-600">+91 98765 43210</p>
              <p className="text-sm text-gray-500">Mon-Sun: 9 AM - 9 PM IST</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Get detailed help via email</p>
              <p className="font-semibold text-green-600">support@rentafriend.in</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with us in real-time</p>
              <Button className="w-full">Start Chat</Button>
              <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="mb-12 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-600 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Emergency Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-800 mb-2">
              <strong>For urgent safety concerns during bookings:</strong>
            </p>
            <p className="text-xl font-bold text-red-600 mb-2">+91 98765 00000</p>
            <p className="text-sm text-red-700">
              Available 24/7 • Also contact local police (100) if in immediate danger
            </p>
          </CardContent>
        </Card>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {category.category}
                  <Badge variant="secondary">{category.questions.length} questions</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Need Help */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="flex-1">
                <Button className="w-full">Contact Support</Button>
              </Link>
              <Button variant="outline" className="flex-1 bg-transparent">
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Live Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
