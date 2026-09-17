import logo from '../../logo.png';
import officerOne from '../../img1.jpg';
import officerTwo from '../../img2.jpg';
import officerThree from '../../img3.jpg';
import officerFour from '../../img4.jpeg';

const assets: Record<string, string> = {
  'logo.png': logo,
  'img1.jpg': officerOne,
  'img2.jpg': officerTwo,
  'img3.jpg': officerThree,
  'img4.jpeg': officerFour,
};

export function assetPath(fileName: string): string {
  return assets[fileName] ?? fileName;
}
