
require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'date'

set :port, 3000
set :bind, '0.0.0.0'


albums = [
  {
    album_name: 'if everyone is doing it why so can we',
    artist: 'the cramberries',
    rating: 3,
    relDate: "10-3-1995",
    url: "http://www.technobuffalo.com/wp-content/uploads/2014/05/google-plus-stories-03-200x200.png"
  },
  {
    album_name: 'borriquito como tú',
    artist: 'Peret',
    rating: 4,
    relDate: "10-3-1998",
    url: "http://media-cache-ec0.pinimg.com/236x/30/d4/c9/30d4c9ed980dddf9b7ce624e6e0ab03b.jpg"
  },
  {
    album_name: 'zoquetito como tú',
    artist: 'Manolito',
    rating: 5,
    relDate: "10-3-2007",
    url: "https://lh3.googleusercontent.com/-mUtYVYBlmIw/Tkau7teGygI/AAAAAAAADFo/gMjGoTapZus/w200/17539%2B-%2Banimated%2Bbrushie%2Bbrushie_brushie%2Bbrushie_brushie_brushie%2Bderp%2Brainbow_dash%2Btoothbrush.gif"
  },
  {
    album_name: 'arre Arre',
    artist: 'Alicias',
    rating: 2,
    relDate: "10-3-1998",
    url: "https://lh6.googleusercontent.com/-CCydSjeFVg0/U4DOfHYRyXI/AAAAAAAANEI/dYvniJCBjXM/s200/DSC_0138-001.JPG" 
  }
]


get '/' do	
	erb :index
end

get '/albums' do
	content_type :json
	albums.to_json
end



__END__
