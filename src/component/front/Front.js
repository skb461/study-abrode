import React, { lazy, Suspense } from 'react';
import './../../App.css';

const FrontAdmission = lazy(() => import('./FrontAdmission'));
const FrontArticle = lazy(() => import('./FrontArticle'));
const FrontAsk = lazy(() => import('./FrontAsk'));
const FrontCourse = lazy(() => import('./FrontCourse'));
const FrontHero = lazy(() => import('./FrontHero'));
const FrontJob = lazy(() => import('./FrontJob'));
const FrontPartner = lazy(() => import('./FrontPartner'));
const FrontStory = lazy(() => import('./FrontStory'));
const FrontStudent = lazy(() => import('./FrontStudent'));
const FrontStudy = lazy(() => import('./FrontStudy'));

function Front() {
  return (
    <div className="m-0">
      <Suspense fallback={<div>Loading...</div>}>
        <FrontHero />
        <FrontStory />
        <FrontStudy />
        <FrontStudent />
        <FrontAsk />
        <FrontCourse />
        <FrontAdmission />
        <FrontJob />
        <FrontArticle />
        <FrontPartner />
      </Suspense>
    </div>
  );
}

export default Front;
