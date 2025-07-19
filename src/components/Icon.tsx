import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPalette, 
  faCog, 
  faRocket, 
  faCloud, 
  faRulerCombined, 
  faHammer, 
  faChartBar,
  faEnvelope,
  faLink,
  faMicrophone,
  faTools,
  faLaptopCode,
  faBuilding,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub,
  faMicrosoft,
  faWebflow
} from '@fortawesome/free-brands-svg-icons';

// Icon mapping for easy reference
const iconMap = {
  // Skills
  'palette': faPalette,
  'cog': faCog,
  'rocket': faRocket,
  
  // Certifications
  'microsoft': faMicrosoft,
  'webflow': faWebflow, // Official Webflow brand icon
  
  // Legacy certification icons (keeping for backward compatibility)
  'cloud': faCloud,
  'palette-cert': faPalette,
  'ruler-combined': faRulerCombined,
  'hammer': faHammer,
  'chart-bar': faChartBar,
  'certificate': faCertificate,
  
  // Social & Contact
  'linkedin': faLinkedin,
  'github': faGithub,
  'envelope': faEnvelope,
  'link': faLink,
  
  // Speaking
  'microphone': faMicrophone,
  'tools': faTools,
  'laptop-code': faLaptopCode,
  'building': faBuilding
};

interface IconProps {
  name: string;
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
}

export default function Icon({ name, className = '', size = '1x' }: IconProps) {
  const icon = iconMap[name as keyof typeof iconMap];
  
  if (!icon) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  return (
    <FontAwesomeIcon 
      icon={icon} 
      className={className}
      size={size}
    />
  );
}
