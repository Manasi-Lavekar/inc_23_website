import Accordian from "../components/accordian";
import './styles/incTeams.css';
import scrollToTop from '../utils/scrollToTop';
import { useEffect } from "react";
export default function FacultyTeam() {
    useEffect(() => {
        scrollToTop();
    }, [])
    const faculty = [
        { value: "Advisory Committee", names: [{ value: "1. Director: Dr. P. T. Kulkarni" }, { value: "2. Principal: Dr. S. T. Gandhe" }, { value: "3. Convenor: Dr. G. P. Potdar" }, { value: "4. HOCD:  Dr. G. V. Kale" }, { value: "5. HOED:  Dr. M. V. Munot" }, { value: "6. HOID:  Dr. A. R. Ghotkar" }, { value: "7. HOFD: Prof. E. M. Reddy" }] },
        { value: "Coordination Team", names: [{ value: "1. Dr. R. C. Jaiswal (E&TC)" }, { value: "2. Prof. M. R. Khodaskar (IT)" }, { value: "3. Dr. S. V. Mundhe (FE)" }, { value: "4. Dr. A. R. Deshpande (Comp)" }] },
        { value: "Marketing", names: [{ value: "1. Prof. S. S. Narkhede and Prof. G. P. Potdar" }, { value: "2. Dr. A. M. Bagade (IT)" }, { value: "3. Dr. S. S. Sonawane (COMP)" }, { value: "4. Prof. P. R. Patil (COMP)" }] },
        { value: "Guest Invitation & hospitality", names: [{ value: "1. Dr. G. V. Kale (COMP)" }, { value: "2. Prof. M. R. Kale (E&TC)" }] },
        { value: "International Project Entries / Publicity (All Zones)", names: [{ value: "1. Dr. M. P. Turuk (E&TC)" }, { value: "2. Dr. G. S. Mundada (E&TC)" }, { value: "3. Dr. A. A. Ghotkar  (IT)" }, { value: "4. Dr. B. M. Vyas (FE)" }] },
        { value: "National / State Level / Publicity (All Zones)", names: [{ value: "1. Dr. Emmanuel M. & Prof. R. B. Murumkar" }, { value: "2. Dr. S. C. Dharmadhikari (IT)" }, { value: "3. Prof. S. S. Pande (IT)" }, { value: "4. Prof. Y. A. Handge (COMP)" }] },
        { value: "Local Publicity", names: [{ value: "1. Prof. H. B. Mali &  Prof. H. S. Thakar" }, { value: "2. Prof. M. N. Kakade (E&TC)" }, { value: "3. Prof. B. D. Kadam (E&TC)" }, { value: "4. Dr. P. A. Khadkikar (COMP)" }, { value: "5. Prof. M. V. Mane (COMP)" }, { value: "6. Prof. S. R. Hiray (IT)" }, { value: "7. Prof. A. C. Karve (IT)" }] },
        { value: "Exclusive Publicity at Professional Bodies & Chapters: IEEE, ACM, CSI, IET ", names: [{ value: "1. Dr. G. V. Kale & Dr. K. V. Sultanpure" }, { value: "2. Prof. M. J. Sagade (E&TC)" }] },
        { value: "Publicity through social media and Campus Ambassador Coordination", names: [{ value: "1. Dr. J. B. Jagdale" }, { value: "2. Prof. M. R. Jansari (COMP)" }, { value: "3. Prof. P. S. Shahane (COMP)" }] },
        { value: "InC Synopsis book, Certificates Design Team", names: [{ value: "1. Prof. B. P. Masram &  Prof. A. G. Dhamankar" }, { value: "2. Prof. N.P. Sapkal (FE)" }, { value: "3. Mr. D. M. Mankar (E&TC)" }] },
        { value: "Certificate Preparation & Distribution Committee ", names: [{ value: "1. Prof. V. B. Patole (FE)" }, { value: "2. Mr. V. A. Manmode (FE)" }, { value: "3. Mr. B. S. Jadhav (IT)" }] },
        { value: "Website Management, Payment Gateways, Domain Registration, SSL Certificate ", names: [{ value: "1. Prof. P. J. Jambhulkar (COMP)" }, { value: "2. Prof. P. A. Jain (COMP)" }, { value: "3. Mr. S. R. Shelar (IT)" }] },
        { value: "Program Committee in consultation with Concerned committees", names: [{ value: "1. Prof. S. D. Hade (FE)" }, { value: "2. Prof. R. G. Yellalwar (E&TC)" }] },
        { value: "Inauguration of InC in Labs (All arrangements)", names: [{ value: "1. Dr. K.C. Waghmare (COMP)" }, { value: "2. Prof. A. S. Kadam (IT)" }, { value: "3. Prof. A. A. Gawari (E&TC)" }] },
        { value: "Memento Distribution to Judges/Guests", names: [{ value: "1. Prof. S. S. Khot (E&TC)" }, { value: "2. Prof. P. B. Tathe (E&TC)" }, { value: "3. Prof. S.V. Shinkar (E&TC)" }] },
        { value: "Judging Committee for Concepts Event", names: [{ value: "1. Dr. S. B. Deshmukh & Prof. M.S. Chavan" }, { value: "2. Prof. T.A. Rane (IT)" }, { value: "3. Prof. A. A. Chandorkar (COMP)" }, { value: "4. Prof. S. D. Hake (E&TC)" }, { value: "5. Prof. D. D. Kadam (COMP)" }, { value: "6. Prof. L. A. Pawar (COMP)" }, { value: "7. Prof. G. S. Pise (IT)" }] },
        { value: "Impetus", names: [{ value: "1. Prof. M. S. Wakode & Prof. V. V. Bagade" }, { value: "2. Dr. S. K Moon (E&TC)" }, { value: "3. Dr. S. T.  Gawhale (FE)" }] },
        { value: "Pradnya", names: [{ value: "1. Prof. P.S. Vidap (COMP)" }, { value: "2. Prof. S. P. Shintre (COMP)" }, { value: "3. Prof. U.A. Jogalekar (IT)" }, { value: "4. Prof. S. L. Rane (IT))" }, { value: "5. Ms. B. M. Katewal (IT)" }] },
        { value: "InC 2023 Theme Projects Identification", names: [{ value: "1. Prof. A. A. Jewalikar (COMP)" }, { value: "2. Prof. P. P. Joshi (COMP)" }, { value: "3. Dr. S. S. Wasekar (E&TC)" }] },
        { value: "Identification of Patentable projects with External IPR Expert.", names: [{ value: "1. Dr. S. R. Ranade (E&TC)" }, { value: "2. Dr. A. M. Deshmukh (FE)" }, { value: "3. Dr. D. D. Pradhan (E&TC)" }] },
        { value: "Attendance & Feedback Committee for InC 2023", names: [{ value: "1. Prof. V.B Vaijapurkar (E&TC)" }, { value: "2. Prof. K. M. Masal (E&TC)" }, { value: "3. Prof. A. A. Deshpande (COMP)" }, { value: "4. Prof. S. S. Shinde (IT)" }, { value: "5. Dr. P. G. Umape (FE)" }, { value: "6. Prof. A. S. Bodhe (FE)" }] },
        { value: "Finance and Budget Committee", names: [{ value: "1. Prof. A. M. Kulkarni (FE)" }, { value: "2. Dr. A.R. Deshpande (COMP)" }, { value: "3. Mrs. V. V. Karmarkar (ACCOUNTS)" }] },
        { value: "Student Volunteer Committee", names: [{ value: "1. Prof. E. M. Reddy (FE)" }, { value: "2. Prof. A. A. Chavan (FE)" }, { value: "3. Prof. A. M. Kulkarni (FE)" }, { value: "4. Prof. R. R. Vardhaman (FE)" }] },
        { value: "Purchase", names: [{ value: "1. Director: Dr. P. T. Kulkarni" }, { value: "2. Principal: Dr. S. T. Gandhe" }, { value: "3. Dr. G. P. Potdar (COMP)" }, { value: "4. Mr. A. V. Sapkal (PO/EM)" }] },
        { value: "Preparation of all relevant Documents/ ISO Files ", names: [{ value: "1. Prof. N. G. Nirmal (E&TC)" }, { value: "2. Prof. D. M. Shinde (E&TC)" }, { value: "3. Prof. A. M. Gadade (FE)" }, { value: "4. Mr. S. Renuse (COMP)" }, { value: "5. Mr. A. V. Torne (FE)" }] },
        { value: "Assistance for InC Coordination Team", names: [{ value: "1. Mr. A. S. Sutar (E&TC)" }, { value: "2. Mr. K. S.  Ugale (E&TC)" }, { value: "3. Mr. S. H. Karsulkar (COMP)" }] },
        { value: "Network Administration and BW management during Event", names: [{ value: "1. Prof. M.S. Chavan (COMP))" }, { value: "2. Mr. S. S. Metkari (COMP)" }, { value: "3. Mr. P. P. Parkhi (COMP)" }] },
        { value: "VNL", names: [{ value: "1. Prof. R. S. Paswan (COMP)" }, { value: "2. Prof. S. D. Shelke (IT)" }, { value: "3. Prof. A. K. Patel (E&TC)" }, { value: "4. Prof. S. K. Shah (COMP)" }, { value: "5. Prof. D.S. Sapkal (IT)" }, { value: "6. Mr. S. N. Deokate (FE)" }, { value: "7. Mr. N. S. Mirajkar (FE)" }] },
        { value: "Stage Setup", names: [{ value: "1. Prof. S. A. Jakhete & A. A. Joshi" }, { value: "2. Prof. P. S. Joshi (COMP)" }, { value: "3. Prof. A. V. Yenkikar (IT)" }, { value: "4. Prof. S. M. Hosamani (E&TC)" }, { value: "5. Prof. U. S. Pawar (COMP)" }, { value: "6. Prof. A. N. Sayyad (FE)" }, { value: "7. Prof. A. C. Karve (IT)" }, { value: "8. Prof. V. A. Patil (E&TC)" }, { value: "9. Dr. U. R. Polina (FE)" }, { value: "10. Ms. A. M. Kulkarni (IT)" }] },
        { value: "Inauguration and Closing ceremony Tasks.", names: [{ value: "1. Dr. A. R. Deshpande & Dr. A.G. Phakatkar" }] },
        { value: "T-Shirts", names: [{ value: "1. Prof. V. S. Gaikwad (COMP)" }, { value: "2. Prof. S. S. More (E&TC)" }, { value: "3. Prof. A. A. Kadam (IT)" }] },
        { value: "Hardware", names: [{ value: "1. Prof. V. R. Jaiswal & Prof. N. V. Buradkar (IT)" }, { value: "2. Prof. D. M. Shinde (E&TC)" }, { value: "3. Prof. S. R. Warhade (IT)" }, { value: "4. Prof. A. S. Ramteke (E&TC)" }, { value: "5. Mr. D. M. Mankar (E&TC)" }, { value: "6. Mr. D.D. Thikekar (COMP)" }, { value: "7. Mr. K. B. Kadambande (COMP)" }, { value: "8. Mr. B.S. Jadhav (IT)" }, { value: "9. Mr. D.P. Dabir (E&TC)" }, { value: "10. Mr. A. V. Torne (FE)" }] },
        { value: "Canteen Arrangement", names: [{ value: "1. Dr. J. B. Jagdale (IT)" }, { value: "2. Prof. A. R. Gangajaliwale (E&TC)" }, { value: "3. Prof. H. S. Jain (E&TC)" }, { value: "4. Prof. S. P. Patel (COMP)" }, { value: "5. Prof. R. R. Jadhav (COMP)" }, { value: "6. Prof. V. R. Kandekar (COMP)" }, { value: "7. Prof. N. N. Shinde (IT)" }, { value: "8. Prof. R. D. Kapadi (IT)" }, { value: "9. Mr. K.S. Bhosale (OFFICE)" }] },
        { value: "P A System/Telephone/Network/Electrical facilities", names: [{ value: "1. Prof. L.P. Patil (Overall Incharge)" }, { value: "2. Mr. K.S.  Ugale (PA System)" }, { value: "3. Mr. S. M. Pawar (Electrical Maintenance)" }, { value: "4. Mr. S. S. Metkari (Network Admin)" }, { value: "5. Mr. S.M. Shinde (Telephone)" }, { value: "6. Mr. A M Chavan (Electrical Maintenance)" }, { value: "7. Mr. M. Pawse (Computer  Maintenance)" }] },
        { value: "Transport Management", names: [{ value: "1. Prof. P. D Jadhav & Mr. A. V. Sapkal" }, { value: "2. Prof. H. S. Khatri (FE)" }, { value: "3. Prof. N. A. Shete (FE)" }, { value: "4. Prof. V. R. Bhoi (FE)" }, { value: "5. Prof. K. D. Kulkarni (FE)" }, { value: "6. Prof. G. R. Tungaskar (FE)" }, { value: "7. Mr. R. V. Badekar (COMP)" }, { value: "8. Mr. A. B. Wagh (Purchase)" }] },
        { value: "Parking & Police Arrangement", names: [{ value: "1. Mr. A.V Sapkal (PO/EM)" }, { value: "2. Mr. K. Kadambande (COMP)" }, { value: "3. Mr. A. B. Wagh (Purchase)" }] },
        { value: "Trophies + Memento + Photos", names: [{ value: "1. Prof. K. R. Jadhav (Trophies) (FE)" }, { value: "2. Prof. R.R. Vardhaman (FE)" }, { value: "3. Prof. R. A. Karnavat (Chhajed) (Memento) (IT)" }, { value: "4. Prof. A.A. Bidkar (E&TC)" }, { value: "5. Prof. S. M. Hosamani  (Souvenir) (E&TC)" }, { value: "6. Mr. S. V.  Kasar (COMP)" }] },
    ];
    return (

        <>
            <div className="my-10 md:mt-28 mt-20">
                <div className="flex justify-center items-center ">

                    <h2 className='team-name2 md:before:w-[80rem] before:w-80 before:h-10 md:before:h-[3.4rem]'>Staff Committee Team</h2>
                </div>
            </div>
            {faculty.map(fac => (
                <Accordian value={fac.value} names={fac.names} />
            ))}
            <br />
            <br />
        </>



    );

}