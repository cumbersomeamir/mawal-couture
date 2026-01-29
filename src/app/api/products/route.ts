import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const collection = searchParams.get('collection');
    const gender = searchParams.get('gender');
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const newArrival = searchParams.get('newArrival');
    const limit = searchParams.get('limit');
    const sort = searchParams.get('sort');

    // Build query
    const query: Record<string, any> = {};
    
    if (collection) {
      query.collectionName = collection;
    }
    if (gender) {
      query.gender = gender;
    }
    if (category) {
      query.category = category;
    }
    if (featured === 'true') {
      query.featured = true;
    }
    if (newArrival === 'true') {
      query.newArrival = true;
    }

    // Build sort
    let sortOption: Record<string, 1 | -1> = { createdAt: -1 };
    if (sort === 'price-low') {
      sortOption = { price: 1 };
    } else if (sort === 'price-high') {
      sortOption = { price: -1 };
    } else if (sort === 'newest') {
      sortOption = { createdAt: -1 };
    }

    // Execute query
    let productsQuery = Product.find(query).sort(sortOption);
    
    if (limit) {
      productsQuery = productsQuery.limit(parseInt(limit));
    }

    const products = await productsQuery.lean();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
