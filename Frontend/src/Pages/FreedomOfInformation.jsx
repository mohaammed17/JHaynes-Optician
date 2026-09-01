import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FreedomOfInformation = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold text-primary">Freedom of Information (UK) Act 2000</h2>
          <p className="lead text-muted">Glenfield Opticians Publication Scheme</p>
        </div>

        <div className="row g-4">
          <div className="col-12" data-aos="fade-up">
            <div className="card shadow border-0 rounded-4 p-4 bg-white">
              <h5 className="text-info fw-bold">Introduction</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                This publication scheme is a complete guide to the information routinely made available to the public by your local Glenfield Opticians. It is a description of the information about our NHS services which we make publicly available. It will be reviewed regularly and we will monitor its effectiveness.
              </p>

              <h5 className="text-info fw-bold mt-4">How much does it cost?</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                The publications are free unless otherwise indicated. Where information is provided at a cost, the charges will be calculated as set out in Class 7 below.
              </p>

              <h5 className="text-info fw-bold mt-4">How is the information made available?</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                The information in each class is available on our website at <strong>www.GlenfieldOpticians.co.uk</strong> or as a printed document from:
                <br />
                Group Company Secretary<br />
                Glenfield Eyecare Limited,<br />
                93 Dominion Road, Glenfield, Leicestershire, LE3 8FB
              </p>

              <h5 className="text-info fw-bold mt-4">Your rights to information</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                <ul>
                    <li>
                The aim of the Freedom of Information Act 2000 is to provide members of the public with access to information held by public authorities.</li>
                <br />
                <li>You are entitled to certain information in relation to the NHS services we provide under the Freedom of Information Act 2000 and the NHS Openness Code 1995.</li>
                <br />
                <li>From 1st January 2005 our opticians will be required to respond to requests for information in relation to the NHS service they provide. You will have a right of access to that information subject to exemptions as contained in the Freedom of Information Act 2000.</li>
                <br />
                <li>Under the Data Protection Act 1998, you are also entitled to access your own clinical records or any other personal information held about you. Please contact your local Glenfield Opticians in order to obtain copies of this information if you wish.</li>
              </ul>
              </p>

              <h5 className="text-info fw-bold mt-4">Feedback</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                If you have any comments about the operation of this publication scheme or how your request for information under it has been dealt with, please contact:
                <br />
                Group Company Secretary<br />
                Glenfield Eyecare Limited<br />
                93 Dominion Road, Glenfield, Leicestershire, LE3 8FB
              </p>

              <h5 className="text-info fw-bold mt-4">Classes of Information</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                All NHS information at your local Glenfield Opticians is held, retained and/or destroyed in accordance with NHS guidelines. Our commitment to publish information excludes any information which can be withheld under the exemptions set out in the Freedom of Information Act 2000 or the NHS Openness Code 1995.
                <br />
                Where individual Classes are subject to exemptions, the main reasons are the protection of commercial interests and the protection of personal information under the Data Protection Act 1998. This applies to all Classes in the publication scheme.
              </p>

              <h5 className="text-info fw-bold mt-4">Who We Are</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Glenfield Opticians has been caring for people's eyes since 2009. It is our aim to be the best value opticians satisfying personal eyecare needs at affordable prices, simply, clearly and consistently.
                <br />
                Details of all opticians and optometrists employed by your local Glenfield Opticians can be found in store. Please contact your local Glenfield Opticians directly to obtain this information.
                <br />
                Alternatively, details of all UK registered opticians can be obtained from the General Optical Council:<br></br>Please contact the General Optical Council via their website at
                <br />
                <a href="http://www.optical.org.uk" target="_blank" rel="noopener noreferrer">www.optical.org.uk</a> or telephone 020 7580 3898.
              </p>

              <h5 className="text-info fw-bold mt-4">Our Services</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                If you are eligible for a free NHS sight test you can visit any Glenfield Opticians for your free test. Your local Glenfield Opticians will also accept NHS vouchers against purchases of glasses and/or contact lenses.
                <br />
                To find out if you are eligible for a free eye test and/or NHS vouchers please contact NHS Direct on 0845 4647 or visit <a href="http://www.nhsdirect.nhs.uk" target="_blank" rel="noopener noreferrer">www.nhsdirect.nhs.uk</a>. Alternatively, you can contact your local health authority.
                <br />
                If you would like to make an appointment please contact your local Glenfield Opticians, details and opening times of which can be found on this Website.
              </p>

              <h5 className="text-info fw-bold mt-4">Financial and Funding Information</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Glenfield Opticians currently receive £23.53 for each NHS sight test performed in the UK. However, the sight test fees in Northern Ireland, Scotland and Wales differ.
                <br />
                Please refer to the websites shown below for up to date information on this subject. Your local Glenfield Opticians can inform you of the current cost of an eye test for those who do not qualify for NHS assistance.
                <br />If you would like further information about the value of the NHS vouchers accepted by your local Glenfield Opticians and NHS charges please visit:<br></br>
                <a href="http://www.doh.gov.uk/ophthalmicservices" target="_blank" rel="noopener noreferrer">England</a><br />
                <a href="http://www.dhsspsni.gov.uk" target="_blank" rel="noopener noreferrer">Northern Ireland</a><br />
                <a href="http://www.show.scot.nhs.uk" target="_blank" rel="noopener noreferrer">Scotland</a><br />
                <a href="http://www.wales.gov.uk" target="_blank" rel="noopener noreferrer">Wales</a>
              </p>

              <h5 className="text-info fw-bold mt-4">Publications and Public Information</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Information in relation to your eye test, the NHS, and family eyecare can be found on our website at <strong>www.GlenfieldOpticians.co.uk</strong>.
              </p>

              <h5 className="text-info fw-bold mt-4">Complaints</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                A copy of our complaints procedure can be obtained from your local Glenfield Opticians. If you have a complaint, we recommend that you first contact the store director.
              </p>

              <h5 className="text-info fw-bold mt-4">Our Policies and Procedures</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Details of our Health and Safety policy can be obtained from your local Glenfield Opticians.
              </p>

              <h5 className="text-info fw-bold mt-4">This Publication Scheme</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
               Any changes to the publication scheme and any proposed changes or additions to publications already available will be published in this Class.
              </p>

              <h5 className="text-info fw-bold mt-4">Cost of Information</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                For the most part, you will only be charged for printed copies of information required. Some information is available free, but for others there may be a charge.<br></br>The charges will vary according to how the information is made available. The charges are as follows:
                <ul>
                  <li>Information accessed via www.Glenfield Opticians.co.uk or provided by e-mail is free of charge except for charges made by your internet service provider.</li>
                  <li>Requests for single printed copies are free of charge.</li>
                  <li>Requests for multiple printed copies or archived copies will attract a charge to cover incidental costs such as photocopying and postage.</li>
                </ul>
               These charges will be reviewed regularly.
              </p>

              <h5 className="text-info fw-bold mt-4">Useful Resources</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                <strong>Websites:</strong><br />
                The Lord Chancellor's Department: <a href="http://www.icd.gov.uk" target="_blank" rel="noopener noreferrer">www.icd.gov.uk</a><br />
                NHS Freedom of Information: <a href="http://www.foi.nhs.uk" target="_blank" rel="noopener noreferrer">www.foi.nhs.uk</a><br />

                <strong>Publications:</strong><br />
                NHS Openness Code: <a href="http://www.dh.gov.uk" target="_blank" rel="noopener noreferrer">www.dh.gov.uk</a><br />
                Freedom of Information Act 2000: <a href="http://www.hmso.gov.uk" target="_blank" rel="noopener noreferrer">www.hmso.gov.uk</a>
              </p>

              <h5 className="text-info fw-bold mt-4">Copyright</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
    © Copyright Glenfield Eyecare Limited 2008 All rights reserved.<br></br><br></br>

Copyright in the whole and every part of this publication scheme belongs to Glenfield Eyecare Limited.<br></br><br></br>

Copyright in the whole and every part of the material available through www.Glenfieldopticians.co.uk belongs to Glenfield Eyecare Limited.<br></br><br></br>

Copyright in the whole and every part of the material available from your local Glenfield Opticians belongs to the Glenfield Eyecare Limited.<br></br><br></br>

Material available through third party links is the copyright of the relevant owner.<br></br><br></br>

Any material belonging to either Glenfield Eyecare Limited or the Glenfield Opticians may not be used, sold, transferred, copied, adapted, or reproduced in whole or in part in any manner or form or in or on any media by any person without the prior written consent of the relevant owner.<br></br><br></br>

Permission to use material owned by third parties should be requested from the relevant owner.<br></br><br></br>

Warning: Any an unauthorised act in relation to this confidential copyright work may result in both a civil claim for damages and criminal prosecution.<br></br><br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreedomOfInformation;
