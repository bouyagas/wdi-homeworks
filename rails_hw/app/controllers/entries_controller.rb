class EntriesController < ApplicationController

  #get all entries
  def index
    render json: Entry.all
  end

  def show
    render json: Entry.find_by_id(params[:id])
  end

  def create
    new_entry = Entry.new(permitted_params)
    if new_entry.save
      render json: new_entry
    else
      render status: 422
    end
  end

  def update
    found_entry = Entry.find_by_id(params[:id])
    saved = found_entry.update(permitted_params)
    if saved
      render status: 204
    else
      render status: 422
    end
  end

  def destroy
    found_entry = Entry.find_by_id(params[:id])
    if found_entry.destroy
      render status: 204
    else
      render status: 422
    end
  end

  private

  def permitted_params
    params.require(:entry).permit(:name, :entry)
  end

end
