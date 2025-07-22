"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, Shield, CheckCircle, AlertCircle, Camera, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function IDVerificationPage() {
  const [step, setStep] = useState(1)
  const [aadhaarNumber, setAadhaarNumber] = useState("")
  const [panNumber, setPanNumber] = useState("")
  const [uploadedDocs, setUploadedDocs] = useState({
    aadhaar: false,
    pan: false,
    selfie: false,
  })

  const handleFileUpload = (docType: string) => {
    // Simulate file upload
    setUploadedDocs((prev) => ({ ...prev, [docType]: true }))
  }

  const progress = ((step - 1) / 3) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/friend-dashboard" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Government ID Verification</h1>
            </div>
            <Badge variant="secondary">Step {step} of 3</Badge>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Verification Progress</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step 1: Aadhaar Verification */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-blue-600" />
                <div>
                  <CardTitle>Aadhaar Card Verification</CardTitle>
                  <CardDescription>
                    Enter your Aadhaar details and upload a clear photo of your Aadhaar card
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="aadhaar">Aadhaar Number</Label>
                <Input
                  id="aadhaar"
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value)}
                  placeholder="1234 5678 9012"
                  maxLength={14}
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">Your Aadhaar number is encrypted and stored securely</p>
              </div>

              <div>
                <Label>Upload Aadhaar Card</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {uploadedDocs.aadhaar ? (
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span>Aadhaar card uploaded successfully</span>
                    </div>
                  ) : (
                    <div>
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Upload a clear photo of your Aadhaar card (front side)
                      </p>
                      <Button onClick={() => handleFileUpload("aadhaar")} variant="outline">
                        Choose File
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-medium mb-1">Important Guidelines:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Ensure all text is clearly visible and readable</li>
                      <li>Photo should be well-lit without shadows</li>
                      <li>Do not cover any part of the card</li>
                      <li>Accepted formats: JPG, PNG (max 5MB)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button className="w-full" onClick={() => setStep(2)} disabled={!aadhaarNumber || !uploadedDocs.aadhaar}>
                Continue to PAN Verification
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: PAN Verification */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-green-600" />
                <div>
                  <CardTitle>PAN Card Verification</CardTitle>
                  <CardDescription>Enter your PAN details and upload a clear photo of your PAN card</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="pan">PAN Number</Label>
                <Input
                  id="pan"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                  placeholder="ABCDE1234F"
                  maxLength={10}
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">Format: 5 letters, 4 numbers, 1 letter (e.g., ABCDE1234F)</p>
              </div>

              <div>
                <Label>Upload PAN Card</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {uploadedDocs.pan ? (
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span>PAN card uploaded successfully</span>
                    </div>
                  ) : (
                    <div>
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Upload a clear photo of your PAN card</p>
                      <Button onClick={() => handleFileUpload("pan")} variant="outline">
                        Choose File
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Why we need PAN verification:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Required for tax compliance and earnings reporting</li>
                      <li>Helps prevent identity fraud and ensures authenticity</li>
                      <li>Mandatory for financial transactions above ₹50,000</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1 bg-transparent">
                  Back
                </Button>
                <Button className="flex-1" onClick={() => setStep(3)} disabled={!panNumber || !uploadedDocs.pan}>
                  Continue to Photo Verification
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Live Photo Verification */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Camera className="h-8 w-8 text-purple-600" />
                <div>
                  <CardTitle>Live Photo Verification</CardTitle>
                  <CardDescription>Take a selfie to verify your identity matches your documents</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-4">
                  {uploadedDocs.selfie ? (
                    <div className="text-green-600">
                      <CheckCircle className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Photo captured successfully</p>
                    </div>
                  ) : (
                    <div className="text-gray-400">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Take a selfie</p>
                    </div>
                  )}
                </div>

                {!uploadedDocs.selfie && (
                  <Button onClick={() => handleFileUpload("selfie")} className="mb-4">
                    <Camera className="h-4 w-4 mr-2" />
                    Capture Photo
                  </Button>
                )}
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <Camera className="h-5 w-5 text-purple-600 mt-0.5 mr-3" />
                  <div className="text-sm text-purple-800">
                    <p className="font-medium mb-1">Photo Guidelines:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Look directly at the camera</li>
                      <li>Ensure good lighting on your face</li>
                      <li>Remove sunglasses or hat</li>
                      <li>Keep a neutral expression</li>
                      <li>Make sure your face is clearly visible</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
                  <div className="text-sm text-green-800">
                    <p className="font-medium mb-1">Verification Process:</p>
                    <p>
                      Our team will review your documents within 24-48 hours. You'll receive an email notification once
                      verification is complete. During this time, you can continue setting up your profile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1 bg-transparent">
                  Back
                </Button>
                <Button
                  className="flex-1"
                  disabled={!uploadedDocs.selfie}
                  onClick={() => alert("Verification submitted! You'll receive an email within 24-48 hours.")}
                >
                  Submit for Verification
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Verification Status */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-sm">Verification Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Aadhaar Card</span>
                {uploadedDocs.aadhaar ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="h-4 w-4 border border-gray-300 rounded-full" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">PAN Card</span>
                {uploadedDocs.pan ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="h-4 w-4 border border-gray-300 rounded-full" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Live Photo</span>
                {uploadedDocs.selfie ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="h-4 w-4 border border-gray-300 rounded-full" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
