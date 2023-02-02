class LikesController < ApplicationController
  before_action :set_event
  
  def create
    @event.increment!(:likes_count)
    redirect_to(@event)
  end

  private

  def set_event
    @event = Event.find(params[:event_id])
  end  
end