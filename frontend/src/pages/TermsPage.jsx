import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { SectionWrapper, SectionHeader, Container } from '../components/SectionWrapper';

const termsContent = [
  {
    title: '1. Services',
    content: `YTStack LLP provides:
• Website design and development
• UI/UX design
• Website maintenance and support
• Related digital services

All services are delivered as per agreed proposals, timelines, and scope documents.`
  },
  {
    title: '2. Client Responsibilities',
    content: `Clients agree to:
• Provide accurate project requirements and content
• Respond in a timely manner for approvals and feedback
• Ensure they own or have rights to all provided content

Delays from the client side may impact delivery timelines.`
  },
  {
    title: '3. Payments & Pricing',
    content: `• All pricing is as per the agreed quotation or package
• A non-refundable advance payment (typically 30–50%) is required before project initiation
• Remaining payment must be cleared before final delivery or deployment

Failure to complete payment may result in suspension of services or withholding of final files/website access.`
  },
  {
    title: '4. Revisions & Scope Changes',
    content: `• Revisions are limited to the number defined in the selected package
• Additional revisions or changes outside scope will be charged separately
• Major changes after approval may require a new agreement`
  },
  {
    title: '5. Delivery Timeline',
    content: `• Estimated timelines are shared before project start
• Timelines depend on project complexity and client responsiveness
• We are not liable for delays caused by external factors or client delays`
  },
  {
    title: '6. Intellectual Property',
    content: `• Full ownership of the final website is transferred to the client only after full payment
• YTStack LLP retains the right to showcase completed projects in its portfolio
• Any third-party assets remain subject to their respective licenses`
  },
  {
    title: '7. Maintenance & Support',
    content: `• Ongoing maintenance is provided only if included in the package or purchased separately
• We are not responsible for issues caused by third-party modifications`
  },
  {
    title: '8. Limitation of Liability',
    content: `YTStack LLP is not liable for:
• Loss of data, revenue, or business
• Website downtime due to hosting/server issues
• Third-party integrations or failures`
  },
  {
    title: '9. Termination',
    content: `We reserve the right to terminate services if:
• Terms are violated
• Payments are not completed
• Misuse or abusive behavior occurs`
  },
  {
    title: '10. Governing Law',
    content: `These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of appropriate courts.`
  },
  {
    title: '11. Contact',
    content: `For any queries, contact:
📧 ytstack1@gmail.com
📍 YTStack LLP, India`
  }
];

const TermsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)]" />
        <Container className="relative z-10 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-4 group"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            YTStack LLP Legal Agreement - Last Updated: March 20, 2026
          </motion.p>
        </Container>
      </section>

      {/* Terms Content */}
      <SectionWrapper className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:col-span-1 space-y-2"
              >
                <FileText className="h-12 w-12 text-blue-600" />
                <h2 className="text-3xl font-heading font-bold text-slate-900">Legal Agreement</h2>
                <p className="text-slate-600 leading-relaxed">
                  Please read these terms carefully before using our services. By accessing our website or engaging with YTStack LLP, 
                  you agree to comply with these terms and conditions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:col-span-1 flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/contact" 
                  className="flex bg-white border-2 border-blue-600 text-blue-600 py-3 px-12 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Ask Question
                </Link>
              </motion.div>
            </div>

            <div className="space-y-8">
              {termsContent.map((section, index) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="border-l-4 border-blue-500 pl-6 pb-8">
                    <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
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
                By continuing to use YTStack services, you acknowledge that you have read, understood, and agree to these terms.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 font-semibold text-lg uppercase tracking-wide hover:bg-blue-700 transition-all rounded-xl shadow-lg hover:shadow-xl"
              >
                Contact Us
                <ArrowLeft size={20} className="rotate-180" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default TermsPage;

