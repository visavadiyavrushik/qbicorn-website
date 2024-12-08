'use client';

import CommonButton from '@/components/CommonButton/CommonButton';

export default function TryQbiButton() {
  return (
    <div className="text-center">
      <CommonButton
        onClick={() =>
          window.open('https://app.qbicorn.me', '_blank', 'noopener,noreferrer')
        }
        className="text-base 2xl:text-[21px]"
      >
        Try Qbicorn Free
      </CommonButton>
    </div>
  );
}
