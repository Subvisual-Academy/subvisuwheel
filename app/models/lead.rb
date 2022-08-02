class Lead < ApplicationRecord
    validates :name, :email, :interests, presence: true
end
