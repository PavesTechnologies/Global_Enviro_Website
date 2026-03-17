import { Resend } from "resend";
import {
  DEFAULT_ADMIN_NOTIFICATION_EMAIL,
  RESEND_FROM_EMAIL,
} from "@/lib/config";

const STATUS_LABELS = {
  new: "New",
  reviewed: "Reviewed",
  shortlisted: "Shortlisted",
  rejected: "Rejected",
};

function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }

  return new Resend(process.env.RESEND_API_KEY);
}

function getAdminRecipient() {
  return process.env.HR_NOTIFICATION_EMAIL || DEFAULT_ADMIN_NOTIFICATION_EMAIL;
}

export async function sendApplicationAlert({
  applicantName,
  jobTitle,
  applicationId,
}) {
  const resend = getResendClient();
  const adminRecipient = getAdminRecipient();

  if (!resend || !adminRecipient) {
    return;
  }

  await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: adminRecipient,
    subject: `New application: ${jobTitle}`,
    html: `
      <p><strong>${applicantName}</strong> has applied for <strong>${jobTitle}</strong>.</p>
      <p>Application ID: <strong>${applicationId}</strong></p>
      <p>View it in the <a href="${process.env.NEXTAUTH_URL}/admin/applications">HR portal</a>.</p>
    `,
  });
}

export async function sendApplicationStatusUpdate({
  applicantName,
  applicantEmail,
  jobTitle,
  status,
}) {
  const resend = getResendClient();

  if (!resend || !applicantEmail) {
    return;
  }

  await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: applicantEmail,
    subject: `Your application status for ${jobTitle} has been updated`,
    html: `
      <p>Hello ${applicantName || "Candidate"},</p>
      <p>Your application for <strong>${jobTitle}</strong> is now marked as <strong>${STATUS_LABELS[status] || status}</strong>.</p>
      <p>Thank you for your interest in Global Enviro.</p>
    `,
  });
}
