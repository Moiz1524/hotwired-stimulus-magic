class Event < ApplicationRecord
  # rubocop:disable Metrics/MethodLength
  def test_explicit_return
    return "Moiz"
  end
  # rubocop:enable Metrics/MethodLength
end
