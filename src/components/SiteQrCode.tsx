import React from 'react';

import Image from 'next/image';

const QrcodeImg = '/assets/images/qr_code.svg';

export default class SiteQrCode extends React.Component {
  render() {
    return (
      <>
        <style jsx>{`
          .qrCode {
            width: 150px;
            height: 150px;
          }

          .qrText {
            width: 150px;
          }
        `}</style>
        <div className="flex float-right col-auto mt-8 mr-8 print">
          <span className="mt-10 mr-4 text-sm text-right text-gray-800 align-bottom qrText">
            {"Pour plus d'informations, scannez ce QR Code ou visitez"}
            <i>dev.ionx.ch</i> !
          </span>
          <div className="qrCode">
            <Image src={QrcodeImg} width={150} height={150} alt="dev.ionx.ch" />
          </div>
        </div>
      </>
    );
  }
}
