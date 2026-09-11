import React from 'react';
import {
  Page1Cover,
  Page2ExecutiveWelcome,
  Page3StrategicPillars,
  Page4ToneOfVoice
} from './pages/FoundationPages';
import {
  Page5PrimaryLogo,
  Page6LogoConstruction,
  Page7ClearSpaceAndSizing,
  Page8ColorVariations,
  Page9LogoViolations
} from './pages/LogoPages';
import {
  Page10PrimaryColors,
  Page11AccentAndNeutrals
} from './pages/ColorPages';
import {
  Page12PrimaryTypeCaslon,
  Page13SecondaryTypeLatoQuicksand,
  Page14AccentCalligraphyAllura
} from './pages/TypographyPages';
import { Page15GraphicAssets } from './pages/GraphicAssetsPage';
import {
  Page16BusinessCards,
  Page17LetterheadAndEnvelopes,
  Page18LegalDocumentsContracts
} from './pages/StationeryPages';
import {
  Page19DigitalWebsiteUI,
  Page20SocialMediaSuite,
  Page21CorporateFolders,
  Page22EnvironmentalSignage
} from './pages/DigitalEnvironmentalPages';
import {
  Page23ImageryPhotography,
  Page24BrandGovernance
} from './pages/GovernancePages';

interface PageRendererProps {
  pageNumber: number;
}

export const PageRenderer: React.FC<PageRendererProps> = ({ pageNumber }) => {
  switch (pageNumber) {
    case 1:
      return <Page1Cover />;
    case 2:
      return <Page2ExecutiveWelcome />;
    case 3:
      return <Page3StrategicPillars />;
    case 4:
      return <Page4ToneOfVoice />;
    case 5:
      return <Page5PrimaryLogo />;
    case 6:
      return <Page6LogoConstruction />;
    case 7:
      return <Page7ClearSpaceAndSizing />;
    case 8:
      return <Page8ColorVariations />;
    case 9:
      return <Page9LogoViolations />;
    case 10:
      return <Page10PrimaryColors />;
    case 11:
      return <Page11AccentAndNeutrals />;
    case 12:
      return <Page12PrimaryTypeCaslon />;
    case 13:
      return <Page13SecondaryTypeLatoQuicksand />;
    case 14:
      return <Page14AccentCalligraphyAllura />;
    case 15:
      return <Page15GraphicAssets />;
    case 16:
      return <Page16BusinessCards />;
    case 17:
      return <Page17LetterheadAndEnvelopes />;
    case 18:
      return <Page18LegalDocumentsContracts />;
    case 19:
      return <Page19DigitalWebsiteUI />;
    case 20:
      return <Page20SocialMediaSuite />;
    case 21:
      return <Page21CorporateFolders />;
    case 22:
      return <Page22EnvironmentalSignage />;
    case 23:
      return <Page23ImageryPhotography />;
    case 24:
      return <Page24BrandGovernance />;
    default:
      return <Page1Cover />;
  }
};
