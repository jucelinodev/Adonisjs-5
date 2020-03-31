import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index() {
    return await Product.all()
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'description', 'price'])
    const product = await Product.create(data)
    return response.status(201).json(product)
  }

  public async show({ params }: HttpContextContract) {
    return await Product.findOrFail(params.id)
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['name', 'description', 'price'])
    const product = await Product.findOrFail(params.id)
    product.merge(data)
    await product.save()
    return product
  }

  public async delete({ params, response }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
    return response.status(204)
  }
}
