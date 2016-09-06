class Api::BenchesController < ApplicationController
  def index
    @benches = bounds_params ? Bench.in_bounds(bounds_params) : Bench.all
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private

  def bench_params
    params.require(:bench).permit(:lat, :lng, :description, :seating)
  end

  def bounds_params
    params[:filters][:bounds]
  end
end
