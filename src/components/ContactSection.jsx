import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: 'Thank you for your message. I will get back to you soon.',
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="bg-secondary/30 relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
          Feel free to reach out for collaboration, questions, or just to say
          hello!
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-light"> Contact Information</h3>

            <div className="justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="text-primary h-6 w-4" />
                </div>
                <div>
                  <h4 className="font-medium"> Personal Email</h4>
                  <a
                    href="mailto:nandaki.bhonagiri@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nandaki.bhonagiri@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="text-primary h-6 w-4" />
                </div>
                <div>
                  <h4 className="font-medium"> School Email</h4>
                  <a
                    href="mailto:bhonagiri.4@buckeyemail.osu.edu"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    bhonagiri.4@buckeyemail.osu.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Phone className="text-primary h-6 w-4" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+17406024240"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (740) 602-4240
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <MapPin className="text-primary h-6 w-4" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Columbus, OH, USA
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4>Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/nandakibhonagiri"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card rounded-lg p-8 shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="mb-6 text-2xl font-light">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  {' '}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                  placeholder="Nandaki Bhonagiri..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  {' '}
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                  placeholder="nandaki.bhonagiri@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  {' '}
                  Your Message
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="border-input bg-background focus:ring-primary w-full resize-none rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'cosmic-button flex w-full items-center justify-center gap-2',
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
