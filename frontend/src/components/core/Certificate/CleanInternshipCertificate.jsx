import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { formatDate } from '../../../utils/dateFormatter';

export default function CleanInternshipCertificate({ certificateData }) {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    const generateQR = async () => {
      if (certificateData?.certificateId) {
        try {
          const url = await QRCode.toDataURL(
            `${window.location.origin}/verify-certificate/${certificateData.certificateId}`
          );
          setQrCodeUrl(url);
        } catch (err) {
          console.error('Error generating QR code:', err);
        }
      }
    };
    generateQR();
  }, [certificateData?.certificateId]);

  const certificateStyle = {
    fontFamily: "'Inter', sans-serif",
    width: '1000px',
    height: '700px',
    margin: '0 auto',
    position: 'relative',
    padding: '60px 80px',
    boxSizing: 'border-box',
    background: 'white',
    border: '4px solid #7ee8fa',
    boxShadow: '0 0 0 4px #7ee8fa inset',
    color: '#222222'
  };

  const cornerStyle = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    border: '3px solid #7ee8fa'
  };

  return (
    <div style={certificateStyle} role="main" aria-label="Enhanced Certificate from Beeja Academy">
      {/* Decorative corners */}
      <div 
        style={{
          ...cornerStyle,
          top: '10px',
          left: '10px',
          borderRight: 'none',
          borderBottom: 'none'
        }}
      >
        <div style={{
          content: '""',
          position: 'absolute',
          top: '12px',
          left: '12px',
          width: '16px',
          height: '16px',
          border: '2px solid #7ee8fa',
          borderLeft: 'none',
          borderTop: 'none'
        }}></div>
      </div>

      <div 
        style={{
          ...cornerStyle,
          top: '10px',
          right: '10px',
          borderLeft: 'none',
          borderBottom: 'none'
        }}
      >
        <div style={{
          content: '""',
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '16px',
          height: '16px',
          border: '2px solid #7ee8fa',
          borderRight: 'none',
          borderTop: 'none'
        }}></div>
      </div>

      <div 
        style={{
          ...cornerStyle,
          bottom: '10px',
          left: '10px',
          borderRight: 'none',
          borderTop: 'none'
        }}
      >
        <div style={{
          content: '""',
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          width: '16px',
          height: '16px',
          border: '2px solid #7ee8fa',
          borderLeft: 'none',
          borderBottom: 'none'
        }}></div>
      </div>

      <div 
        style={{
          ...cornerStyle,
          bottom: '10px',
          right: '10px',
          borderLeft: 'none',
          borderTop: 'none'
        }}
      >
        <div style={{
          content: '""',
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          width: '16px',
          height: '16px',
          border: '2px solid #7ee8fa',
          borderRight: 'none',
          borderBottom: 'none'
        }}></div>
      </div>

      {/* Header */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '30px'
      }}>
        {/* Certificate ID */}
        <div style={{
          fontSize: '0.9rem',
          color: '#666',
          fontWeight: '500'
        }}>
          Certificate ID: {certificateData?.certificateId || 'BA-25FJ2849'}
        </div>

        {/* Logo and Academy Name */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <img 
            src="/beejalogo.png" 
            alt="Beeja Academy Logo" 
            style={{
              width: '64px',
              height: '70px',
              objectFit: 'cover'
            }}
          />
          <div style={{
            fontWeight: '700',
            fontSize: '1.5rem',
            color: '#111827',
            userSelect: 'none'
          }}>
            Beeja Academy
          </div>
        </div>

        {/* Issue Date - Top Right */}
        <div style={{
          fontSize: '0.9rem',
          color: '#666',
          fontWeight: '500',
          textAlign: 'right'
        }}>
          Issued on: {formatDate(certificateData?.completionDate) || 'July 7, 2025'}
        </div>
      </header>

      {/* Title */}
      <h1 style={{
        textAlign: 'center',
        fontWeight: '900',
        fontSize: '2.5rem',
        letterSpacing: '0.15em',
        marginBottom: '12px',
        color: '#222222',
        userSelect: 'none'
      }}>
        CERTIFICATE
      </h1>

      {/* Dots */}
      <div style={{
        textAlign: 'center',
        color: '#7ee8fa',
        fontSize: '1.5rem',
        letterSpacing: '0.5em',
        marginBottom: '30px',
        userSelect: 'none'
      }}>
        •••••
      </div>

      {/* Content */}
      <div style={{
        textAlign: 'center',
        marginBottom: '0px',
        marginTop: '-15px',
        padding: '0 40px'
      }}>
        <div style={{
          fontSize: '1.1rem',
          fontWeight: '600',
          color: '#333',
          marginBottom: '25px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          THIS CERTIFICATE IS PRESENTED TO
        </div>

        <div style={{
          fontSize: '2.2rem',
          fontWeight: '700',
          color: '#7a6fff',
          marginBottom: '30px',
          borderBottom: '3px solid #7ee8fa',
          display: 'inline-block',
          paddingBottom: '8px',
          minWidth: '350px',
          letterSpacing: '0.02em'
        }}>
          {certificateData?.studentName || '<Student Name>'}
        </div>
        
        <div style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#444',
          marginBottom: '20px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          has successfully completed online training on<br/>
          <span style={{
            fontWeight: '700',
            color: '#7a6fff',
            fontSize: '1.3rem',
            letterSpacing: '0.5px',
            textTransform: 'capitalize'
          }}>
            {certificateData?.categoryName || certificateData?.courseId?.category?.name || 'General'}
          </span><br/>
          and real-time project training on<br/>
          <span style={{
            fontWeight: '700',
            color: '#7a6fff',
            fontSize: '1.3rem',
            letterSpacing: '0.5px'
          }}>
            {certificateData?.courseName || certificateData?.courseId?.courseName || 'Course Name'}
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: '-50px',
        position: 'relative',
        paddingBottom: '0px',
        maxWidth: '100%',
        padding: '0 20px'
      }}>
        {/* QR Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          width: '120px'
        }}>
          <div style={{
            width: '70px',
            height: '70px',
            background: '#333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '8px',
            textAlign: 'center',
            borderRadius: '6px',
            border: '2px solid #7ee8fa'
          }}>
            {qrCodeUrl ? (
              <img src={qrCodeUrl} alt="Certificate QR Code" style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
            ) : (
              <div>
                ████████<br/>
                █&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█<br/>
                █&nbsp;████&nbsp;█<br/>
                █&nbsp;████&nbsp;█<br/>
                █&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█<br/>
                ████████
              </div>
            )}
          </div>
          <div style={{
            fontSize: '0.7rem',
            color: '#666',
            textAlign: 'center',
            whiteSpace: 'nowrap'
          }}>
            Scan to Verify
          </div>
        </div>

        {/* Center - Website and Email */}
        <div style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          flex: '1',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#7a6fff',
            letterSpacing: '0.3px'
          }}>
            www.beejaacademy.com
          </div>
          <div style={{
            fontSize: '0.8rem',
            color: '#666',
            fontWeight: '500'
          }}>
            info@beejaacademy.com
          </div>
        </div>

        {/* Signature Section */}
        <div style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          width: '120px'
        }}>
          <img 
            src="/src/assets/Certificate/Director-sign-certificate.png" 
            alt="Director Signature" 
            style={{
              width: '120px',
              height: '60px',
              objectFit: 'contain',
              marginBottom: '6px'
            }}
          />
          <div style={{
            width: '140px',
            height: '2px',
            background: 'linear-gradient(90deg, #7ee8fa, #7a6fff)',
            marginBottom: '6px'
          }}></div>
          <div style={{
            fontWeight: '700',
            fontSize: '1rem',
            color: '#333',
            letterSpacing: '0.3px'
          }}>
            JOSHWA
          </div>
          <div style={{
            fontSize: '0.8rem',
            color: '#666',
            fontWeight: '500'
          }}>
            Director
          </div>
        </div>
      </div>
    </div>
  );
}
