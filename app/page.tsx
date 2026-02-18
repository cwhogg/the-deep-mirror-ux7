import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Deep Mirror | AI Enneagram Test That Gets Your Type Right',
  description: 'Unlike static surveys, our AI has real conversations to explore complexity and get to the truth of your core motivations through dynamic dialogue.',
  openGraph: {
    title: 'The Deep Mirror | AI Enneagram Test That Gets Your Type Right',
    description: 'Unlike static surveys, our AI has real conversations to explore complexity and get to the truth of your core motivations through dynamic dialogue.',
    type: 'website',
    url: 'https://the-deep-mirror.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Deep Mirror | AI Enneagram Test That Gets Your Type Right',
    description: 'Unlike static surveys, our AI has real conversations to explore complexity and get to the truth of your core motivations through dynamic dialogue.',
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            The AI Enneagram Test That Actually Gets Your Type Right
          </h1>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Unlike static surveys, our AI has real conversations. When you're uncertain or your responses reveal complexity, we explore deeper to get to the truth of your core motivations through dynamic dialogue.
          </p>
          <div className="mb-12">
            <Link
              href="#signup"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Experience AI-Powered Enneagram Assessment
            </Link>
          </div>
          
          {/* Methodology Credibility */}
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-slate-700 italic">
              "Unlike surveys that move to the next question, our AI asks: 'You mentioned feeling driven by success, but now you're saying you avoid attention. Help me understand...'"
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Conversational AI Gets Better Results
            </h2>
            <p className="text-xl text-slate-700">
              Traditional surveys can't explore the contradictions and complexity that reveal your actual type
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Dynamic Questioning Instead of Static Surveys
              </h3>
              <p className="text-slate-700 mb-4">
                When your answer doesn't make sense or seems incomplete, our AI asks follow-up questions tailored to your specific response. No more being stuck with predetermined options that don't fit your situation.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Explores Contradictions in Real-Time
              </h3>
              <p className="text-slate-700 mb-4">
                Traditional tests just record inconsistent answers. Our AI notices when responses don't align and explores what you actually mean, catching the nuances that reveal your true motivational patterns.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Ongoing Refinement Over Time
              </h3>
              <p className="text-slate-700 mb-4">
                Your understanding deepens as you grow. Return to refine your typing as circumstances change or self-awareness develops, without paying for multiple assessments.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Situational Context Understanding
              </h3>
              <p className="text-slate-700 mb-4">
                Get guidance on applying your type insights to specific relationships, workplace dynamics, or personal challenges. The AI helps you understand how your patterns show up in different contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Common Concerns About AI Assessment
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                "Can AI really understand personality better than human experts?"
              </h3>
              <p className="text-slate-700">
                Our AI doesn't replace human insight—it scales the conversational methodology that skilled practitioners use. It asks the same probing questions and explores the same contradictions, but can spend unlimited time understanding your unique patterns without hourly fees.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                "How do I know the results are accurate?"
              </h3>
              <p className="text-slate-700">
                Unlike surveys that give you a type based on predetermined scoring, our conversational approach shows you exactly how we reached conclusions. You'll see the specific dialogue moments that revealed your patterns, making the accuracy transparent and verifiable.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                "This sounds more time-intensive than a quick survey."
              </h3>
              <p className="text-slate-700">
                Quality typing requires proper exploration. But you're not filling out endless questionnaires—you're having a natural conversation. Most people find it engaging rather than tedious because the AI adapts to their communication style and builds on their responses intelligently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="signup" className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Conversational Assessment?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the accuracy you've been looking for through AI conversation that explores your complexity
          </p>
          
          <form className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500"
                required
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Experience AI-Powered Enneagram Assessment
              </button>
            </div>
          </form>
          
          <p className="text-sm text-blue-100">
            Start your typing conversation with ongoing refinement included
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">The Deep Mirror</h3>
              <p className="text-sm">
                AI-powered Enneagram assessment through conversational methodology
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Assessment</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">How It Works</Link></li>
                <li><Link href="#" className="hover:text-white">Accuracy Methodology</Link></li>
                <li><Link href="#" className="hover:text-white">Sample Conversation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/compare" className="hover:text-white">Compare Tools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-sm">
              © 2026 The Deep Mirror. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}