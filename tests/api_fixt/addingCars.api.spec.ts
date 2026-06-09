import { test, expect } from '@playwright/test';
import { negativeDataCar } from '../../test-data/cars.data';

test('Adding car, Post positive', async ({ request }) => {
 
    const response = await request.post('/api/cars', {
      data: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 20,
      },
    });

   
    expect(response.status()).toBe(201);

    const body = await response.json();
   
    console.log(body);

    expect(body.status).toBe('ok');
    expect(body.data).toHaveProperty('id');
    expect(body.data.mileage).toBe(20);
  });

  test('Adding car, Post negative , wrong paramter', async ({ request }) => {
 
    const response = await request.post('/api/cars', {
      data: {
        carBrandId: 1,
        carModelId: 1,
        mileage: -20,
      },
    });

   // console.log(response.status());
   // console.log(await response.json());
    expect(response.status()).toBe(400);

    const body = await response.json();
   
    console.log(body);

   expect(body.status).toBe('error');
    expect(body.message).toBe('Mileage has to be from 0 to 999999');
    expect(body.data).toBeUndefined();
   
  });

  test.only('Adding car, Post negative , absent paramter', async ({ request }) => {
 
    const response = await request.post('/api/cars', {
      data: negativeDataCar // we use data from test data
    });

   console.log(response.status());
console.log(await response.json());
    expect(response.status()).toBe(400);

    const body = await response.json();
   
    console.log(body);
  

   expect(body.status).toBe('error');
    expect(body.message).toBe('Invalid mileage type');
    expect(body.data).toBeUndefined();
   
  });

