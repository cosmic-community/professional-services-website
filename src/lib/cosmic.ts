// src/lib/cosmic.ts
import { createBucketClient } from '@cosmicjs/sdk';

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.COSMIC_READ_KEY,
  writeKey: import.meta.env.COSMIC_WRITE_KEY,
  apiEnvironment: "staging"
});

export { cosmic };

// Type guard to check if error has status property
function isCosmicError(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Utility functions for data fetching
export async function getServices() {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    if (isCosmicError(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch services');
  }
}

export async function getTeamMembers() {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    if (isCosmicError(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch team members');
  }
}

export async function getCaseStudies() {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    if (isCosmicError(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch case studies');
  }
}

export async function getTestimonials() {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    if (isCosmicError(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

export async function getFeaturedTestimonials() {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'testimonials',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    if (isCosmicError(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured testimonials');
  }
}