// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
}

// Service object type
export interface Service extends CosmicObject {
  type_slug: 'services';
  metadata: {
    service_name?: string;
    short_description?: string;
    full_description?: string;
    service_icon?: {
      url: string;
      imgix_url: string;
    };
    starting_price?: string;
    key_features?: string[];
  };
}

// Team Member object type
export interface TeamMember extends CosmicObject {
  type_slug: 'team-members';
  metadata: {
    full_name?: string;
    job_title?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    email?: string;
    linkedin_url?: string;
    skills?: string[];
    years_experience?: number;
  };
}

// Case Study object type
export interface CaseStudy extends CosmicObject {
  type_slug: 'case-studies';
  metadata: {
    project_title?: string;
    client_name?: string;
    industry?: string;
    project_overview?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services_used?: Service[];
    project_duration?: string;
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type_slug: 'testimonials';
  metadata: {
    client_name?: string;
    client_title?: string;
    company_name?: string;
    testimonial_text?: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    featured?: boolean;
  };
}

// Export type aliases to match import expectations
export type ServiceObject = Service;
export type TeamMemberObject = TeamMember;
export type CaseStudyObject = CaseStudy;
export type TestimonialObject = Testimonial;

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards for runtime validation
export function isService(obj: CosmicObject): obj is Service {
  return obj.type_slug === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type_slug === 'team-members';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type_slug === 'case-studies';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type_slug === 'testimonials';
}