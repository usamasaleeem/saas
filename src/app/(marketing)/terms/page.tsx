import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Hirel AI",
  description: "Terms of Service for Hirel AI.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="prose prose-lg dark:prose-invert">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 1, 2024</p>

          <p>
            Please read these terms and conditions carefully before using Our Service.
          </p>

          <h2>1. Terms</h2>
          <p>
            By accessing the website at https://hirelai.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Hirel AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Hirel AI's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on Hirel AI's website are provided on an 'as is' basis. Hirel AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall Hirel AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Hirel AI's website, even if Hirel AI or a Hirel AI authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, You can contact us:</p>
          <ul>
            <li>By email: <strong>info@hirelai.com</strong></li>
            <li>By phone: <strong>+31 505 858585</strong></li>
            <li>By mail: <strong>Hirel AI, I8 Islamabad Pakistan</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
