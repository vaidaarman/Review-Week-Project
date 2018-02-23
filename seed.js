const db = require('./server/db');
const Physician = require('./server/db/models/physician');
const Patient = require('./server/db/models/patient');


const physicians = [{
  name: 'Emma Daisy, MD',
  specialty: 'Family Medicine, Geriatrics',
  description: 'Dr. Emma Daisy is Board Certified in Family Medicine and Geriatrics. She graduated from Northwestern Feinberg School of Medicine and completed her family medicine residency at Northwestern, training at a federally qualified health center in the Humboldt Park neighborhood. She completed a fellowship in geriatrics at the University of Chicago. She is interested in providing high-quality primary care to patients of all ages, throughout their lives.  Her training in Geriatrics allows her to focus on the unique health needs of older adults within their established medical home.'
}, {
  name: 'Laurie Carrier, MD',
  specialty: 'Family Medicine, Psychiatry',
  description: 'Dr. Laurie Carrier oversees clinical operations at Heartland Health Centers. She completed her residency at the University of Cincinnati in family medicine and psychiatry where she served as chief resident.  Dr. Carrier began her work at Heartland Health Centers in 2009 as the Director of Behavioral Health care and has been implementing integrated care throughout HHC and with community partners. Dr. Laurie Carrier has an appointment at Swedish Covenant Hospital and an appointment as an Assistant Professor at Northwestern University Feinberg’s School of Medicine, Department of Community and Family Practice. Her interests include preventative health, global health, and integrated care.'
}, {
  name: 'Kristin B. Alexander, LCSW',
  specialty: 'Behavioral Health',
  description: 'Kristin B. Alexander is a board certified Licensed Clinical Social Worker. She received her master’s in social work from the University of Illinois at Chicago. Kristin has experience in crisis intervention, brief therapy, and case management. Her professional interest includes working with children, families and adults from culturally diverse backgrounds.'
}, {
  name: 'Scott Feldman, MD',
  specialty: 'Psychiatry',
  description: 'Dr. Scott Feldman is a board certified general Psychiatrist and a child and adolescent Psychiatrist. He received his medical degree from the University of Illinois Chicago College of Medicine-Rockford, and has been in practice for over 21 years. His professional interest includes research and family therapy.'
}];

const patients = [
  {
    firstName: 'Mike',
    lastName: 'Monroe',
    email: 'MMonroe@yahoo.com',
    dob: 19650817,
    pastHistory: 'Hypertension and diabetes',
    physicianId: 1,
  },
  {
    firstName: 'Max',
    lastName: 'Bennet',
    email: 'MBennet@gmail.com',
    dob: 19731023,
    pastHistory: 'Dyslipidemia, CAD, HTN.',
    physicianId: 1,
  },
  {
    firstName: 'Cindy',
    lastName: 'Allen',
    email: 'CAllen@yahoo.com',
    dob: 19680106,
    pastHistory: 'Hypertension and diabetes.',
    physicianId: 2,
  },
  {
    firstName: 'Zoe',
    lastName: 'Rickman',
    email: 'ZRickaman@gmail.com',
    dob: 19820315,
    pastHistory: 'none',
    physicianId: 3,
  },
];

const seed = () =>
  Promise.all(physicians.map(physician =>
    Physician.create(physician))
  )
    .then(() =>
      Promise.all(patients.map(patient =>
        Patient.create(patient))
      )
    );

const runSeed = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

runSeed();
