import PatientForm from '@/components/forms/PatientForm';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>

        {/* Logo and Name */}

        <div className='sub-container max-w-[496px]'>
          <div className='flex justify-start'>
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt='patient'
              className='mb-12 h-10 w-fit' />
            <p className='p-1 text-xl'>Health Harmony</p>
          </div>

          {/* Patient Form */}

          <PatientForm />

          {/* Copyright and Link to Admin Page */}

          <div className='text-14-regular mt-20 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-leff'>© {new Date().getFullYear()} Health Harmony</p>
            <Link href="/?admin=true" className='text-green-500'>Admin</Link>
          </div>
        </div>
      </section>

      {/* Side Image */}

      <Image src="/assets/images/onboarding-img.png" height={1000}
        width={1000}
        alt='patient'
        className='side-img max-w-[50%]' />
    </div>
  );
}
