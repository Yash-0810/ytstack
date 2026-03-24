import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Download, FileText } from 'lucide-react';
import { SectionWrapper, SectionHeader, Container } from '../components/SectionWrapper';

const privacyContent = [
  {
    title: '1. Information We Collect',
    content: `We may collect:
• Name, email, phone number
• Business details
• Project requirements
• Payment information (processed securely via third-party providers)`
  },
  {
    title: '2. How We Use Your Information',
    content: `We use your data to:
• Communicate and provide services
• Process payments
• Improve our website and offerings
• Send updates or promotional content (only if consented)`
  },
  {
    title: '3. Data Protection',
    content: `We implement appropriate security measures to protect your data from:
• Unauthorized access
• Misuse or disclosure

However, no method of transmission over the internet is 100% secure.`
  },
  {
    title: '4. Cookies',
    content: `Our website may use cookies to:
• Enhance user experience
• Track website performance and analytics

Users can disable cookies through browser settings.`
  },
  {
    title: '5. Third-Party Services',
    content: `We may use third-party tools (e.g., payment gateways, analytics tools). These services have their own privacy policies, and we are not responsible for their practices.`
  },
  {
    title: '6. Data Sharing',
    content: `We do not sell or rent your personal data.
We may share data only:
• When required by law
• With trusted service providers for operations`
  },
  {
    title: '7. Data Retention',
    content: `We retain your information only as long as necessary for:
• Service delivery
• Legal and business purposes`
  },
  {
    title: '8. Your Rights',
    content: `You have the right to:
• Access your data
• Request correction or deletion
• Opt-out of marketing communications`
  },
  {
    title: '9. Updates to Policy',
    content: `We may update this Privacy Policy from time to time. Changes will be reflected on this page.`
  },
  {
    title: '10. Contact Us',
    content: `For privacy-related concerns:
📧 ytstack1@gmail.com
📍 YTStack LLP, India`
  }
];

const PrivacyPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.06),transparent_70%)]" />
        <Container className="relative z-10 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-4 group"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            YTStack LLP Privacy Commitment - Last Updated: March 20, 2026
          </motion.p>
        </Container>
      </section>

      {/* Privacy Content */}
      <SectionWrapper className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:col-span-1 space-y-2"
              >
                <Shield className="h-12 w-12 text-emerald-600" />
                <h2 className="text-3xl font-heading font-bold text-slate-900">Your Privacy Matters</h2>
                <p className="text-slate-600 leading-relaxed">
                  YTStack LLP is committed to protecting your personal information and ensuring transparency 
                  in how we collect, use, and safeguard your data.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:col-span-1 flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/contact" 
                  className="flex bg-white border-2 border-emerald-600 text-emerald-600 py-3 px-12 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Privacy Question
                </Link>
              </motion.div>
            </div>

            <div className="space-y-8">
              {privacyContent.map((section, index) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="border-l-4 border-emerald-500 pl-6 pb-8">
                    <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                      {section.title}
                    </h3>
                    <div className="prose prose-slate max-w-none">
                      <p className="text-lg leading-relaxed whitespace-pre-wrap">{section.content}</p>
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-20 pt-12 border-t border-slate-200"
            >
              <p className="text-slate-600 text-lg mb-6">
                Your trust is important to us. Contact us anytime for privacy-related questions or concerns.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 font-semibold text-lg uppercase tracking-wide hover:bg-emerald-700 transition-all rounded-xl shadow-lg hover:shadow-xl"
              >
                Contact Privacy Team
                <ArrowLeft size={20} className="rotate-180" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default PrivacyPage;

