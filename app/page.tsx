"use client"

import { useState } from "react"
import { ChevronRight, MapPin, Star, Users, Calendar, Phone, Mail, Instagram, Facebook, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function BaliPlayWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const tourPackages = [
    {
      title: "Cultural Heritage Tour",
      description: "Explore ancient temples, traditional villages, and local art markets",
      price: "Rp 500,000",
      image: "/Tanahlot_baliplay.png?height=200&width=300",
      highlights: ["Tanah Lot Temple", "Ubud Art Market", "Traditional Village"],
    },
    {
      title: "Adventure & Nature",
      description: "Volcano hiking, waterfall chasing, and jungle trekking",
      price: "Rp 700,000",
      image: "/Gunungbatur_baliplay.png?height=200&width=300",
      highlights: ["Mount Batur Sunrise", "Sekumpul Waterfall", "Rice Terraces"],
    },
    {
      title: "Beach & Island Hopping",
      description: "Crystal clear waters, pristine beaches, and snorkeling",
      price: "Rp 600,000",
      image: "/Nusapenida_baliplay.png?height=200&width=300",
      highlights: ["Nusa Penida", "Crystal Bay", "Snorkeling Spots"],
    },
    {
      title: "Food & Culinary Tour",
      description: "Taste authentic Balinese cuisine and learn cooking secrets",
      price: "Rp 400,000",
      image: "/Makananbali_baliplay.png?height=200&width=300",
      highlights: ["Local Warungs", "Cooking Class", "Spice Garden"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "Australia",
      rating: 5,
      comment: "Amazing experience! Our guide was knowledgeable and friendly. Highly recommend BaliPlay!",
    },
    {
      name: "Marco Rodriguez",
      country: "Spain",
      rating: 5,
      comment: "Perfect tour organization. Saw the most beautiful places in Bali. Thank you BaliPlay team!",
    },
    {
      name: "Lisa Chen",
      country: "Singapore",
      rating: 5,
      comment: "Professional service and great value for money. Will definitely book again!",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-orange-100 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Image
                  src="/baliplay_favicon.png?height=40&width=40"
                  alt="BaliPlay Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  BaliPlay
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link href="#tours" className="text-gray-700 hover:text-orange-600 transition-colors">
                Tours
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors">
                Reviews
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </Link>
                <Link href="https://heylink.me/baliplay--" passHref>
                <Button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600">
                  Book Now
                </Button>
                </Link>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="#home"
                    className="text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="#tours"
                    className="text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    Tours
                  </Link>
                  <Link
                    href="#about"
                    className="text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    Reviews
                  </Link>
                  <Link
                    href="#contact"
                    className="text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    Contact
                  </Link>
                  <Button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 mt-4">
                    Book Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">#1 Tour Guide di Bali</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Temukan Keajaiban
                  <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    di Bali
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                Rasakan budaya Bali yang autentik, pemandangan yang menakjubkan, 
                dan petualangan yang tak terlupakan dengan pemandu lokal kami yang ahli.         
               </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://heylink.me/baliplay--" passHref>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-lg px-8 py-3"
                  >
                    Jelajahi Tur
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/p/DLgZn4FySGO/" target="_blank" rel="noopener noreferrer" passHref>
                  <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent"
                  >
                  Tonton Video
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Tujuan Wisata</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/baliplay_1.png?height=600&width=500"
                  alt="Beautiful Bali landscape"
                  width={900}
                  height={900}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-orange-200 to-blue-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="tours" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Paket Wisata Populer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilihlah dari paket wisata kami yang dirancang untuk memberikan Anda pengalaman terbaik di Bali
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourPackages.map((tour, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                      {tour.title}
                    </CardTitle>
                    <span className="text-xl font-bold text-orange-600">{tour.price}</span>
                  </div>
                  <CardDescription className="text-gray-600">{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {tour.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 text-orange-500 mr-2" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                    <Link href="https://heylink.me/baliplay--" passHref>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600">
                      Book This Tour
                    </Button>
                    </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Kenapa Pilih Baliplay?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami adalah pemandu lokal yang bersemangat yang mengetahui setiap permata tersembunyi, rahasia budaya, dan pemandangan menakjubkan yang ditawarkan Bali. 
                Misi kami adalah menciptakan pengalaman autentik dan berkesan yang menghubungkan Anda dengan semangat Bali yang sesungguhnya.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ahli Pemandu Lokal</h3>
                    <p className="text-gray-600 text-sm">Lahir dan dibesarkan di Bali dengan pengetahuan budaya yang mendalam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hidden Gems</h3>
                    <p className="text-gray-600 text-sm">Akses ke tempat-tempat rahasia yang tidak pernah ditemukan wisatawan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Penjadwalan Fleksibel</h3>
                    <p className="text-gray-600 text-sm">Tur disesuaikan dengan preferensi dan jadwal Anda</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">5-Star Experience</h3>
                    <p className="text-gray-600 text-sm">Selalu dinilai sangat baik oleh tamu kami</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/baliplay_logo.png?height=500&width=600"
                alt="BaliPlay team"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Apa Kata Wisatawan Kami</h2>
            <p className="text-xl text-gray-600">Pengalaman nyata dari orang-orang nyata</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.country}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Siap untuk Petualangan Anda di Bali?</h2>
              <p className="text-xl text-orange-100">
                Hubungi kami hari ini untuk merencanakan pengalaman Bali yang sempurna. Kami siap mewujudkan impian Anda!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-200" />
                  <span className="text-orange-100">hello@baliplay.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-200" />
                  <span className="text-orange-100">Ubud, Bali, Indonesia</span>
                </div>
              </div>

                <div className="flex space-x-4 pt-4">
                <Link href="https://www.instagram.com/baliplay_winner/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="icon" className="bg-white/20 hover:bg-white/30 text-white border-0">
                  <Instagram className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="https://www.facebook.com/groups/1019062561759031" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="icon" className="bg-white/20 hover:bg-white/30 text-white border-0">
                  <Facebook className="w-5 h-5" />
                  </Button>
                </Link>
                </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
                <Image
                src="/baliplay_logo.png?height=32&width=32"
                alt="BaliPlay Logo"
                width={100}
                height={100}
                className="rounded-lg"
                />
            </div>
            <p className="text-gray-400 mb-6">Your gateway to authentic Bali experiences</p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">© 2024 BaliPlay. All rights reserved. Made with ❤️ in Bali</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
