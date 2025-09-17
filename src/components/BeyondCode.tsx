import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Film, Palette, Star, Eye, Zap } from "lucide-react";
import photo1 from "@/assets/photography-1.jpg";
import photo2 from "@/assets/photography-2.jpg";
import photo3 from "@/assets/photography-3.jpg";

const BeyondCode = () => {
  const photographyWorks = [
    {
      image: photo1,
      title: "Golden Hour Landscapes",
      description: "Artistic landscape photography with warm lighting and cinematic processing"
    },
    {
      image: photo2, 
      title: "Urban Architecture",
      description: "Street photography focusing on architectural details and urban aesthetics"
    },
    {
      image: photo3,
      title: "Nature Macro",
      description: "Close-up nature photography with artistic post-processing techniques"
    }
  ];

  const movieRecommendations = [
    {
      title: "Inception",
      year: "2010",
      genre: "Sci-Fi / Thriller",
      rating: 5,
      reason: "Mind-bending narrative that mirrors the complexity of AI algorithms"
    },
    {
      title: "Her", 
      year: "2013",
      genre: "Drama / Romance",
      rating: 5,
      reason: "Beautiful exploration of human-AI relationships and emotional intelligence"
    },
    {
      title: "Blade Runner 2049",
      year: "2017", 
      genre: "Sci-Fi / Drama",
      rating: 5,
      reason: "Stunning visuals and deep questions about consciousness and identity"
    },
    {
      title: "Ex Machina",
      year: "2014",
      genre: "Sci-Fi / Thriller", 
      rating: 4,
      reason: "Thought-provoking take on artificial intelligence and the Turing test"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="beyond-code" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Beyond Code</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where creativity meets technology - exploring visual storytelling through photography and curating cinematic experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Photography Section */}
          <div>
            <Card className="card-gradient shadow-soft mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Camera className="w-6 h-6 text-accent" />
                  Creative Photography
                </CardTitle>
                <p className="text-muted-foreground">
                  Daily Lightroom edits showcasing my passion for visual storytelling and post-processing artistry.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <Palette className="w-5 h-5 text-accent" />
                    <div>
                      <h4 className="font-semibold">Freelance Photoshop Artist</h4>
                      <p className="text-sm text-muted-foreground">2+ years of professional client work (confidential projects)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <Eye className="w-5 h-5 text-accent" />
                    <div>
                      <h4 className="font-semibold">Daily Creative Edits</h4>
                      <p className="text-sm text-muted-foreground">Personal photography and Lightroom processing gallery</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photography Gallery */}
            <div className="grid grid-cols-1 gap-4">
              {photographyWorks.map((work, index) => (
                <Card key={index} className="card-gradient shadow-soft hover-lift group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold mb-1">{work.title}</h4>
                      <p className="text-sm text-white/80">{work.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Movies Section */}
          <div>
            <Card className="card-gradient shadow-soft mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Film className="w-6 h-6 text-accent" />
                  Curated Movie Recommendations
                </CardTitle>
                <p className="text-muted-foreground">
                  Films that inspire my work in AI/ML and creative thinking - where technology meets storytelling.
                </p>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {movieRecommendations.map((movie, index) => (
                <Card key={index} className="card-gradient shadow-soft hover-lift group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-accent transition-smooth">
                          {movie.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{movie.year}</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">{movie.genre}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(movie.rating)}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {movie.reason}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="hover-lift">
                <Zap className="w-4 h-4 mr-2" />
                More Recommendations Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;