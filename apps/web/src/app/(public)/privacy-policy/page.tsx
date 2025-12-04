/* eslint-disable @next/next/no-img-element */
'use cache';

import { Separator } from '@/src/components/ui/separator';
import { LAST_LEGAL_UPDATE_DATE as date } from '@/src/utils/constant';

const PrivacyPolicyPage = async () => {
  return (
    <div className='flex flex-col w-full min-h-screen bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12'>
          <div className='flex-1 flex flex-col gap-4'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'>
              Privacy Policy
            </h1>
            <p className='text-lg sm:text-xl text-muted-foreground max-w-2xl'>
              This Privacy Policy explains how Press0 collects, uses, stores,
              and protects information when you interact with the Press0
              WhatsApp AI Agent. By using the Service, you consent to the
              practices described here.
            </p>
          </div>
          <div className='shrink-0 w-full hidden lg:block lg:w-auto lg:max-w-md'>
            <div className='flex w-full h-64 sm:h-80 lg:h-96 items-center justify-center rounded-xl'>
              <img
                src='/illustrations/lawyer-light.svg'
                alt='Legal illustration'
                className='w-full h-full object-contain dark:hidden'
              />
              <img
                src='/illustrations/lawyer-dark.svg'
                alt='Legal illustration'
                className='w-full h-full object-contain hidden dark:block'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
        <div className='flex flex-col gap-12 sm:gap-16'>
          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              Introduction
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>
                This Privacy Policy describes how Press0 (&quot;we&quot;,
                &quot;us&quot;, &quot;our&quot;) handles information when you
                interact with the Press0 WhatsApp AI Agent
                (&quot;Service&quot;).
              </p>
              <p>
                If you do not agree with any part of this Privacy Policy, you
                must discontinue use of the Service immediately.
              </p>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-6'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              Information We Collect
            </h2>
            <div className='flex flex-col gap-6 text-muted-foreground leading-relaxed'>
              <div className='flex flex-col gap-3'>
                <h3 className='text-xl font-semibold text-foreground'>
                  1. Information You Provide
                </h3>
                <p>
                  Because the Service operates entirely through WhatsApp, the
                  information we collect comes directly from your interaction
                  with the Service, including:
                </p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Text messages you send to the Service</li>
                  <li>
                    Images, documents, audio, video, and other attachments
                  </li>
                  <li>Commands, prompts, or instructions</li>
                  <li>
                    Contact information (your WhatsApp phone number as part of
                    message metadata)
                  </li>
                </ul>
              </div>

              <div className='flex flex-col gap-3'>
                <h3 className='text-xl font-semibold text-foreground'>
                  2. Automatically Collected Information
                </h3>
                <p>We may receive metadata such as:</p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Timestamps of messages</li>
                  <li>Delivery status and technical logs</li>
                  <li>
                    Device and network identifiers available through WhatsApp
                  </li>
                  <li>Usage patterns and interaction data</li>
                  <li>System-generated analytics</li>
                </ul>
              </div>

              <div className='flex flex-col gap-3'>
                <h3 className='text-xl font-semibold text-foreground'>
                  3. Information From Third Parties
                </h3>
                <p>
                  Because the Service uses WhatsApp and AI model providers, we
                  may receive data processed by:
                </p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>WhatsApp (message transport and encryption)</li>
                  <li>Cloud hosting providers</li>
                  <li>AI model providers (for generating responses)</li>
                </ul>
                <p>
                  We do not collect information outside of what is necessary to
                  operate the Service.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              How We Use Your Information
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>
                We use your information strictly to operate and improve the
                Service, including:
              </p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Delivering automated responses</li>
                <li>Processing prompts using AI</li>
                <li>Improving the accuracy and functionality of AI models</li>
                <li>Monitoring usage patterns and performance</li>
                <li>Debugging, troubleshooting, and preventing abuse</li>
                <li>Ensuring service reliability and security</li>
              </ul>
              <p className='font-semibold text-foreground'>
                We do not use your information for advertising, profiling, or
                resale.
              </p>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              Data Storage and Retention
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>
                Your messages may be stored temporarily or persistently,
                depending on system needs, for processing requests, improving
                performance, maintaining security, and complying with legal
                requirements.
              </p>
              <p>
                We retain data only as long as necessary for the purposes
                outlined in this Privacy Policy, unless longer retention is
                required by law. When data is no longer needed, it is securely
                deleted or anonymized.
              </p>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-6'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              Data Sharing and Disclosure
            </h2>
            <div className='flex flex-col gap-6 text-muted-foreground leading-relaxed'>
              <p>
                We do not sell your data or share it with third parties for
                marketing purposes. We may share information only with:
              </p>
              <div className='flex flex-col gap-3'>
                <h3 className='text-xl font-semibold text-foreground'>
                  1. Service Providers
                </h3>
                <p>Third-party vendors that assist in:</p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>AI response generation</li>
                  <li>Cloud hosting and storage</li>
                  <li>Security and analytics</li>
                  <li>Infrastructure operations</li>
                </ul>
                <p>
                  These providers are contractually obligated to protect your
                  data.
                </p>
              </div>

              <div className='flex flex-col gap-3'>
                <h3 className='text-xl font-semibold text-foreground'>
                  2. Legal Compliance
                </h3>
                <p>We may disclose information if required to:</p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Comply with lawful requests or legal obligations</li>
                  <li>Protect the safety and rights of users or the public</li>
                  <li>Detect or prevent fraud, abuse, or security threats</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              Security of Your Information
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>
                We implement administrative, technical, and organizational
                measures to protect your information. However:
              </p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>No system is completely secure</li>
                <li>
                  WhatsApp&apos;s encryption and systems are outside our control
                </li>
                <li>The Service does not authenticate user identity</li>
              </ul>
              <p>
                You acknowledge that you use the Service at your own risk and
                agree not to share sensitive or confidential information.
              </p>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              Use of WhatsApp Platform
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>Your communication with the Service is governed by:</p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>WhatsApp&apos;s Terms of Service</li>
                <li>WhatsApp&apos;s Privacy Policy</li>
              </ul>
              <p>
                WhatsApp may have access to message metadata, encrypted content,
                or technical logs when delivering your messages. Press0 does not
                control how WhatsApp processes your information.
              </p>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              AI Processing
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>
                Messages transmitted to the Service may be processed by
                third-party AI providers to generate responses. Important
                AI-related disclaimers:
              </p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>
                  AI models may generate inaccurate or unintended information
                </li>
                <li>
                  Your messages may be logged temporarily for performance,
                  safety, and debugging
                </li>
                <li>
                  AI providers may store anonymized system-level data for safety
                  and compliance
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              Children&apos;s Privacy
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>
                The Service is not intended for children under 13 years of age.
                We do not knowingly collect or process personal information from
                children.
              </p>
              <p>
                If you believe a child has used the Service, contact us
                immediately so we can remove the information.
              </p>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              International Data Transfers
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>
                Your information may be transferred to and processed in
                countries outside your jurisdiction, including those with
                different data protection standards. By using the Service, you
                consent to these transfers.
              </p>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              Your Rights
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>Depending on applicable laws, you may have rights such as:</p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Access to your personal data</li>
                <li>Correction or deletion of your data</li>
                <li>Restriction or objection to processing</li>
                <li>Withdrawal of consent</li>
                <li>Portability of your data</li>
              </ul>
              <p>
                To exercise any rights, contact us through our support channels.
                We may request verification of your identity to process
                requests.
              </p>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              Changes to This Privacy Policy
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>
                We may update this Privacy Policy periodically. Material changes
                will be communicated via our website or other reasonable
                methods.
              </p>
              <p>
                Your continued use of the Service constitutes acceptance of the
                updated Privacy Policy.
              </p>
            </div>
          </section>

          <Separator />

          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
              Contact Us
            </h2>
            <div className='flex flex-col gap-3 text-muted-foreground leading-relaxed'>
              <p>
                If you have questions, concerns, or requests related to this
                Privacy Policy, please contact us through our support channels
                or via email.
              </p>
              <p className='text-sm text-muted-foreground/80'>
                Last updated: {date}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
