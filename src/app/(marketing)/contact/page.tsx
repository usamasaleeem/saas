/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        
        <StaggerChildren className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <StaggerItem>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get in touch
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl text-muted-foreground">
              Want to learn more about Hirel AI? We'd love to hear from you.
            </p>
          </StaggerItem>
        </StaggerChildren>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <FadeIn className="lg:col-span-1 space-y-8" direction="right">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">Sales: sales@hirelai.com</p>
                    <p className="text-muted-foreground">Support: support@hirelai.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Live Chat</h4>
                    <p className="text-muted-foreground">Available Mon-Fri, 9am - 5pm EST in the dashboard.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Office</h4>
                    <p className="text-muted-foreground">100 Tech Square<br />Cambridge, MA 02139<br />United States</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn className="lg:col-span-2" direction="left" delay={0.2}>
            <Card className="border-transparent shadow-lg shadow-black/5 bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center text-white mb-4">
                      {/* Check mark SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground">Thanks for reaching out. We'll be in touch shortly.</p>
                    <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>Send another message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input 
                          id="name" 
                          placeholder="Jane Doe" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Work Email</label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="jane@company.com" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                      <Input 
                        id="company" 
                        placeholder="Acme Corp" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none"
                        placeholder="Tell us about your hiring needs..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
