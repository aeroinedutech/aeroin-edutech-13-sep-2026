import { redirect } from 'next/navigation';

export default function CollegeProfessionalPage() {
  redirect('/programs?category=professional');
}
