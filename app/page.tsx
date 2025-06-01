"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ChevronDown, Check, X, MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const controls = useAnimation()
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  useEffect(() => {
    if (heroInView) {
      controls.start("visible")
    }
  }, [controls, heroInView])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold tracking-tighter">
                Piano Mentor
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                About
              </Link>
              <Link
                href="#eligibility"
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Is This For You?
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <div className="md:hidden">
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Open menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Piano keys background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={staggerChildren}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                Piano Mentoring for Adults
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg md:text-xl mb-8 text-gray-200">
                Discover your musical potential with personalized piano lessons designed specifically for adult
                learners.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 transition-transform hover:scale-105"
                >
                  Book Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 transition-transform hover:scale-105"
                >
                  Request Free Strategy Session
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Link href="#about">
                <ChevronDown className="h-10 w-10 text-white" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About the Mentor */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=600&width=600" alt="Piano Mentor" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    size="icon"
                    className="h-16 w-16 rounded-full bg-white/90 text-black hover:bg-white dark:bg-gray-800/90 dark:text-white dark:hover:bg-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span className="sr-only">Play video</span>
                  </Button>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6 dark:text-white">About the Mentor</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  With over 30 years of experience as a classically trained pianist, I've dedicated my life to mastering
                  the art of piano performance and teaching. My approach combines technical precision with creative
                  expression, helping adult students discover the joy of playing piano at any age.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="dark:text-gray-200">Classically trained with 30+ years of experience</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="dark:text-gray-200">
                      Specialized in teaching adult beginners and intermediate players
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="dark:text-gray-200">Personalized curriculum tailored to your goals</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="dark:text-gray-200">Patient, supportive teaching style</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Eligibility Check */}
        <section id="eligibility" className="py-20 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4 dark:text-white">Is This For You?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                My piano mentoring program is specifically designed for adult learners with specific goals and
                commitment levels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-100 dark:border-green-800"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center text-green-800 dark:text-green-400">
                  <Check className="h-6 w-6 mr-2" />
                  This is for you if...
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">
                      You've always wanted to learn piano but never had the chance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">You played as a child and want to rediscover your skills</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">
                      You're committed to regular practice (at least 30 minutes, 3-4 times per week)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">You have specific musical goals you want to achieve</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">You value personalized guidance and structured learning</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-100 dark:border-red-800"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center text-red-800 dark:text-red-400">
                  <X className="h-6 w-6 mr-2" />
                  This is not for you if...
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">
                      You're looking for quick results without consistent practice
                    </span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">
                      You don't have access to a piano or keyboard for regular practice
                    </span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">
                      You're not willing to commit to a structured learning process
                    </span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">
                      You expect to master complex pieces without building fundamentals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">
                      You're looking for a casual, unstructured approach to learning
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services / Offerings */}
        <section id="services" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Services & Offerings</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive piano education tailored to your specific needs and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "One-on-One Lessons",
                  description: "Personalized instruction focused on your specific goals and learning style.",
                  icon: "🎹",
                },
                {
                  title: "Technical Foundations",
                  description: "Master proper technique, hand positioning, and finger strength for effortless playing.",
                  icon: "👐",
                },
                {
                  title: "Music Theory",
                  description: "Understand the language of music to enhance your playing and composition skills.",
                  icon: "📝",
                },
                {
                  title: "Repertoire Development",
                  description:
                    "Build a personalized collection of pieces that you love to play and showcase your skills.",
                  icon: "📚",
                },
                {
                  title: "Performance Preparation",
                  description:
                    "Develop confidence and overcome performance anxiety with structured practice techniques.",
                  icon: "🎭",
                },
                {
                  title: "Recording Sessions",
                  description:
                    "Capture your progress and share your musical journey with professional recording guidance.",
                  icon: "🎬",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-all"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Packages */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Pricing & Packages</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Flexible options to accommodate your schedule and learning goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Starter",
                  price: "$60",
                  period: "per lesson",
                  description: "Perfect for beginners or those testing the waters.",
                  features: [
                    "45-minute one-on-one lessons",
                    "Basic technique development",
                    "Introductory music theory",
                    "Personalized practice plan",
                    "Email support between lessons",
                  ],
                  cta: "Book a Trial Lesson",
                  popular: false,
                },
                {
                  title: "Committed Learner",
                  price: "$220",
                  period: "monthly",
                  description: "Our most popular package for consistent progress.",
                  features: [
                    "4 weekly 60-minute lessons",
                    "Comprehensive technique training",
                    "In-depth music theory",
                    "Customized repertoire selection",
                    "Recorded lesson highlights",
                    "Priority scheduling",
                    "Unlimited email/text support",
                  ],
                  cta: "Start Your Journey",
                  popular: true,
                },
                {
                  title: "Intensive",
                  price: "$500",
                  period: "monthly",
                  description: "For serious students seeking rapid advancement.",
                  features: [
                    "8 bi-weekly 60-minute lessons",
                    "Advanced technique refinement",
                    "Comprehensive theory & analysis",
                    "Performance preparation",
                    "Recording session (monthly)",
                    "24/7 support via private channel",
                    "Monthly progress evaluation",
                  ],
                  cta: "Apply Now",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-lg overflow-hidden border ${
                    plan.popular
                      ? "border-black dark:border-white shadow-lg relative"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-3 py-1">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-6 dark:bg-gray-800">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{plan.title}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold dark:text-white">{plan.price}</span>
                      <span className="text-gray-500 dark:text-gray-400"> {plan.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="dark:text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Session */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to Start Your Piano Journey?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Book a free 30-minute strategy session to discuss your goals and create a personalized learning plan.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8">
                  Book Your Free Strategy Session
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Student Experiences */}
        <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4 dark:text-white">Student Experiences</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Hear from adults who have transformed their musical abilities through dedicated practice and guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Michael R.",
                  age: 42,
                  quote:
                    "I always wanted to learn piano but thought I was too old. After six months of lessons, I can play pieces I never thought possible. The structured approach made all the difference.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Sarah L.",
                  age: 35,
                  quote:
                    "As a busy professional, I was worried about finding time to practice. The personalized practice plan worked perfectly with my schedule, and I've made incredible progress in just a few months.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "David K.",
                  age: 58,
                  quote:
                    "After retiring, I finally had time to pursue piano. The patient teaching style and focus on proper technique has helped me avoid bad habits and progress quickly despite being a complete beginner.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Jennifer T.",
                  age: 39,
                  quote:
                    "I played as a child but hadn't touched a piano in 20 years. The refresher approach helped me regain my skills and then surpass my previous abilities within just a year.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Robert M.",
                  age: 45,
                  quote:
                    "The music theory component has transformed how I understand music. I'm not just playing notes anymore—I understand why pieces are constructed the way they are.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Lisa P.",
                  age: 51,
                  quote:
                    "I was nervous about performing in front of others, but the performance preparation techniques gave me the confidence to play at my daughter's wedding—a dream come true.",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Age {testimonial.age}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="py-20 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4 dark:text-white">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need to know about piano lessons for adults.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Am I too old to learn piano?",
                    answer:
                      "Absolutely not! Adults have many advantages when learning piano, including better focus, stronger motivation, and the ability to understand complex concepts. Many of my most successful students started in their 40s, 50s, and beyond.",
                  },
                  {
                    question: "How much should I practice?",
                    answer:
                      "For consistent progress, I recommend 30 minutes of focused practice at least 4-5 days per week. Quality is more important than quantity—20 minutes of deliberate, mindful practice is more effective than an hour of distracted playing.",
                  },
                  {
                    question: "Do I need a piano at home?",
                    answer:
                      "While an acoustic piano provides the best experience, a digital piano with weighted keys is perfectly adequate for beginners and intermediate players. I can provide recommendations based on your budget and space constraints.",
                  },
                  {
                    question: "How long until I can play songs I recognize?",
                    answer:
                      "Most adult beginners can play simple versions of familiar songs within 2-3 months of consistent practice. By 6 months, you'll have a small repertoire of pieces you enjoy playing.",
                  },
                  {
                    question: "Do you teach online or in-person?",
                    answer:
                      "I offer both options. In-person lessons take place at my studio in Frankfurt, while online lessons are conducted via Zoom with specific camera setups to ensure I can see your hand positioning clearly.",
                  },
                  {
                    question: "What styles of music do you teach?",
                    answer:
                      "I teach classical, jazz, pop, and film music. While I believe in building a classical foundation for proper technique, we'll focus on the styles that motivate you most.",
                  },
                  {
                    question: "What if I need to cancel a lesson?",
                    answer:
                      "Lessons canceled with at least 24 hours notice can be rescheduled within the same month. Last-minute cancellations or no-shows cannot be rescheduled or refunded, but I understand emergencies happen and will work with you on a case-by-case basis.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border rounded-lg px-4 dark:border-gray-700">
                      <AccordionTrigger className="text-left font-medium py-4 dark:text-white">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  Have questions or ready to start your piano journey? Reach out and I'll get back to you within 24
                  hours.
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white min-h-[120px]"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-gray-200">Send Message</Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Visit the Studio</h2>
                <div className="mb-6 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-300" />
                    <div>
                      <h3 className="font-medium">Studio Location</h3>
                      <p className="text-gray-300">Musterstraße 123, 60329 Frankfurt am Main, Germany</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-1 text-gray-300" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-300">contact@pianomentor.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-1 text-gray-300" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-300">+49 123 456 7890</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden h-[300px] relative">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Studio location map"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block">
                Piano Mentor
              </Link>
              <p className="text-gray-400 max-w-md">
                Helping adults discover the joy of piano playing through personalized instruction and supportive
                guidance.
              </p>
              <div className="flex space-x-4 mt-6">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Piano Mentor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
