import logo from '../../logo.png';
import officerOne from '../../img1.jpg';
import officerTwo from '../../img2.jpg';
import officerThree from '../../img3.jpg';
import officerFour from '../../img4.jpeg';
import officerFive from '../../img5.jpg';
import officerSix from '../../img6.jpg';

const assets: Record<string, string> = {
  'logo.png': logo,
  'img1.jpg': officerOne,
  'img2.jpg': officerTwo,
  'img3.jpg': officerThree,
  'img4.jpeg': officerFour,
  'img5.jpg': officerFive,
  'img6.jpg': officerSix,
};

export function assetPath(fileName: string): string {
  return assets[fileName] ?? fileName;
}
