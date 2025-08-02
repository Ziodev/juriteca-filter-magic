import { useState } from "react";
import { Search, Filter, BookOpen, Calendar, Tag, ChevronDown, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const LegalSearchInterface = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    bookType: "",
    articleRange: "",
    dateRange: "",
    category: [],
    sortBy: "number"
  });
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const mockArticles = [
    {
      id: "59",
      title: "Artículo 59",
      description: "A los cómplices de un crimen o un delito de los que - pondrá la pena inmediatamente inferior a la que corresponde a los autores de este crimen o delito, salvo los casos que la ley otra cosa dispone.",
      tags: ["Complicidad", "Delitos", "Penas"],
      book: "Libro II",
      section: "Delitos contra las Personas"
    },
    {
      id: "60", 
      title: "Artículo 60",
      description: "Se calificarán como cómplices de una acción calificada de delito: aquellos que por dádivas, promesas, amenazas, abuso de poder o de autoridad, maquinaciones o tratos culpables, provocaron esta acción o dieron instrucción para cometerla...",
      tags: ["Complicidad", "Definición", "Elementos"],
      book: "Libro II",
      section: "Delitos contra las Personas"
    }
  ];

  const categories = [
    "Delitos contra las Personas",
    "Delitos contra la Propiedad", 
    "Delitos contra el Estado",
    "Delitos Económicos",
    "Delitos Ambientales"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-legal-surface via-background to-legal-surface">
      {/* Header */}
      <div className="bg-white border-b border-legal-border shadow-elegant">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-legal-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-legal-secondary">Código Penal RD</h1>
                  <p className="text-sm text-muted-foreground">Sistema de Consulta Legal</p>
                </div>
              </div>
            </div>
            <Badge variant="outline" className="bg-legal-primary/10 text-legal-primary border-legal-primary/20">
              República Dominicana
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Advanced Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-elegant border-legal-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg text-legal-secondary">
                  <Filter className="h-5 w-5 mr-2 text-legal-primary" />
                  Filtros Avanzados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Book Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-legal-secondary">Libro</label>
                  <Select value={selectedFilters.bookType} onValueChange={(value) => 
                    setSelectedFilters(prev => ({...prev, bookType: value}))
                  }>
                    <SelectTrigger className="border-legal-border">
                      <SelectValue placeholder="Seleccionar libro" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="libro1">Libro I - Disposiciones Generales</SelectItem>
                      <SelectItem value="libro2">Libro II - Delitos contra las Personas</SelectItem>
                      <SelectItem value="libro3">Libro III - Delitos contra la Propiedad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Article Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-legal-secondary">Rango de Artículos</label>
                  <Select value={selectedFilters.articleRange} onValueChange={(value) => 
                    setSelectedFilters(prev => ({...prev, articleRange: value}))
                  }>
                    <SelectTrigger className="border-legal-border">
                      <SelectValue placeholder="Rango de artículos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">Artículos 1-50</SelectItem>
                      <SelectItem value="51-100">Artículos 51-100</SelectItem>
                      <SelectItem value="101-150">Artículos 101-150</SelectItem>
                      <SelectItem value="151-200">Artículos 151-200</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Categories */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-legal-secondary">Categorías</label>
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between border-legal-border">
                        Categorías legales
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={category} />
                          <label 
                            htmlFor={category} 
                            className="text-sm text-legal-secondary cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Sort Options */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-legal-secondary">Ordenar por</label>
                  <Select value={selectedFilters.sortBy} onValueChange={(value) => 
                    setSelectedFilters(prev => ({...prev, sortBy: value}))
                  }>
                    <SelectTrigger className="border-legal-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="number">Número de artículo</SelectItem>
                      <SelectItem value="relevance">Relevancia</SelectItem>
                      <SelectItem value="recent">Más recientes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="bg-legal-border" />
                
                <Button 
                  variant="outline" 
                  className="w-full border-legal-primary text-legal-primary hover:bg-legal-primary/10"
                >
                  Limpiar Filtros
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Search and Results */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Search Header */}
            <Card className="shadow-elegant border-legal-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-legal-primary" />
                    <h2 className="text-xl font-bold text-legal-secondary">Libro II - Delitos contra las Personas</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Regula los delitos que atentan contra la vida, integridad física, libertad y otros derechos fundamentales de las personas.
                  </p>
                  
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Buscar artículos en este libro..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 border-legal-border focus:border-legal-primary focus:ring-legal-primary/20"
                    />
                  </div>

                  {/* Quick Stats */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <span className="font-medium text-legal-primary">1</span>
                        <span>Títulos</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="font-medium text-legal-primary">16</span>
                        <span>Artículos</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-legal-border">
                      <ArrowUpDown className="h-4 w-4 mr-2" />
                      Filtros Avanzados
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-legal-secondary">Artículos del Libro II</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>Mostrando 1-2 de 16 resultados</span>
                </div>
              </div>

              {/* Article Cards */}
              <div className="space-y-4">
                {mockArticles.map((article) => (
                  <Card 
                    key={article.id} 
                    className="hover:shadow-lg transition-all duration-300 border-legal-border/50 hover:border-legal-primary/30 group cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                              <Badge 
                                variant="outline" 
                                className="bg-legal-primary text-white border-legal-primary font-semibold"
                              >
                                {article.title}
                              </Badge>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-legal-primary hover:text-legal-primary/80 h-6 px-2"
                              >
                                Ver completo
                              </Button>
                            </div>
                            <p className="text-legal-secondary leading-relaxed">
                              {article.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-legal-border/30">
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                              <Badge 
                                key={tag} 
                                variant="secondary"
                                className="bg-legal-primary/10 text-legal-primary hover:bg-legal-primary/20 text-xs"
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{article.section}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center pt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="border-legal-border">
                    Anterior
                  </Button>
                  <Button variant="default" size="sm" className="bg-legal-primary hover:bg-legal-primary/90">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="border-legal-border">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="border-legal-border">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="border-legal-border">
                    Siguiente
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalSearchInterface;