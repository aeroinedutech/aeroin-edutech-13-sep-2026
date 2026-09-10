import { redirect } from 'next/navigation';

export default function CourseDetailRedirect({ params }: { params: { slug: string } }) {
  redirect(`/programs/${params.slug}`);
}
