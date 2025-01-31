import React from 'react'
import styles from "./styles.module.css";

import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Social () {
  const socialMedia = [
    { 
      id: 1,
      name: 'Youtube',
      icon: <FaYoutube />,
      color: 'red',
      title: '1 Million Views Across All Channels',
      lines: ['some cases adjustments.', 'solutions from.']
    },
    { 
      id: 2,
      name: 'Twitter',
      icon: <FaTwitter />,
      color: '#1da1f2',
      title: 'Followers more than 10k',
      lines: ['reason performance', 'registration tests,']
    },
    { 
      id: 3,
      name: 'Instagram',
      icon: <FaInstagram />,
      color: '#e1306c',
      title: 'morly 10k followers',
      lines: ['some cases adjustments.', 'reason performance']
    },
    // { 
    //   id: 4,
    //   name: 'LinkedIn',
    //   icon: <FaLinkedin />,
    //   color: '#0077b5',
    //   title: 'Registration tests',
    //   lines: ['get answers high costs', 'solutions from.']
    // },
    // { 
    //   id: 5,
    //   name: 'GitHub',
    //   icon: <FaGithub />,
    //   color: '#333',
    //   title: 'Performance solutions',
    //   lines: ['learn more about', 'some adjustments']
    // }
  ];

// ...existing code...
return (
  <div className={styles.container}>
    <h2 className={styles.heading}>Our  SOcial Media Highlights </h2>
    <div className={styles.social_grid}>
      {socialMedia.map((item) => (
        <div key={item.id} className={styles.social_card}>
          <div className={styles.icon_container} style={{backgroundColor: item.color}}> 
            {item.icon}
          </div>
          <div className={styles.text_content}>
            <h3 className={styles.text_content_h}>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

