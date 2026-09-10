import { redirect } from 'next/navigation';

export default function SchoolStudentsPage() {
  redirect('/programs?category=school');
}
