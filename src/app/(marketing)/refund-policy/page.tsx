import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Hirel AI",
  description: "Refund Policy for Hirel AI.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="prose prose-lg dark:prose-invert">
          <h1>Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 1, 2024</p>

          <p>
            At Hirel AI, we strive to ensure our customers are completely satisfied with our platform.
            This Refund Policy outlines the terms and conditions under which refunds are provided.
          </p>

          <h2>1. Subscription Refunds</h2>
          <p>
            We offer a 7-days money-back guarantee on all our initial subscription plans. If you are not completely satisfied with our Service within the first 7 days of your initial purchase, you are eligible for a full refund.
          </p>
          <p>
            After the initial 7-day period, subscription fees are generally non-refundable. When you cancel your subscription, you will continue to have access to the Service through the end of your current billing period.
          </p>

          <h2>2. How to Request a Refund</h2>
          <p>
            To request a refund within the eligible period, please contact our support team at <strong>info@hirelai.com</strong> with your account details and the reason for your request. Refunds will be processed to your original method of payment within 7 to 7 business days.
          </p>

          <h2>3. Exceptional Circumstances</h2>
          <p>
            We may grant refunds outside of the standard policy under exceptional circumstances, such as extended service outages or material breaches of our Service Level Agreements, at our sole discretion.
          </p>

          <h2>4. Chargebacks and Disputes</h2>
          <p>
            If a chargeback or payment dispute is initiated with your bank or credit card provider, your account may be suspended pending resolution. We strongly encourage you to contact us directly to resolve any billing issues before initiating a dispute.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Refund Policy, please contact us:</p>
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
