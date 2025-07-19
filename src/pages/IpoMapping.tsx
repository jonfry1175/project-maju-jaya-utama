import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  Target,
  Building,
  FileText,
  Users,
  TrendingUp,
  CheckCircle,
  BarChart3,
  Shield,
  DollarSign,
  Clock,
  Award,
  Phone,
  ArrowRight,
  Lightbulb,
  PieChart,
  FileSearch,
  Settings,
  Globe,
  AlertTriangle,
  Zap,
  MessageSquare,
  Database,
  Search as SearchIcon,
  ClipboardList,
  TrendingDown,
  FileSpreadsheet,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const IpoMapping = () => {
  const { t } = useTranslation("ipo-mapping");

  const mappingObjectives = [
    {
      icon: Building,
      title: t("objectives.items.0.title"),
      description: t("objectives.items.0.description")
    },
    {
      icon: Target,
      title: t("objectives.items.1.title"),
      description: t("objectives.items.1.description")
    },
    {
      icon: Lightbulb,
      title: t("objectives.items.2.title"),
      description: t("objectives.items.2.description")
    }
  ];

  const mappingComponents = [
    {
      title: t("components.items.0.title"),
      icon: Building,
      items: t("components.items.0.items", { returnObjects: true })
    },
    {
      title: t("components.items.1.title"),
      icon: Settings,
      items: t("components.items.1.items", { returnObjects: true })
    },
    {
      title: t("components.items.2.title"),
      icon: Shield,
      items: t("components.items.2.items", { returnObjects: true })
    },
    {
      title: t("components.items.3.title"),
      icon: DollarSign,
      items: t("components.items.3.items", { returnObjects: true })
    },
    {
      title: t("components.items.4.title"),
      icon: Globe,
      items: t("components.items.4.items", { returnObjects: true })
    },
    {
      title: t("components.items.5.title"),
      icon: BarChart3,
      items: t("components.items.5.items", { returnObjects: true })
    }
  ];

  const processSteps = [
    {
      icon: MessageSquare,
      title: t("process.steps.0.title"),
      description: t("process.steps.0.description"),
      duration: t("process.steps.0.duration")
    },
    {
      icon: Database,
      title: t("process.steps.1.title"),
      description: t("process.steps.1.description"),
      duration: t("process.steps.1.duration")
    },
    {
      icon: Users,
      title: t("process.steps.2.title"),
      description: t("process.steps.2.description"),
      duration: t("process.steps.2.duration")
    },
    {
      icon: SearchIcon,
      title: t("process.steps.3.title"),
      description: t("process.steps.3.description"),
      duration: t("process.steps.3.duration")
    },
    {
      icon: TrendingDown,
      title: t("process.steps.4.title"),
      description: t("process.steps.4.description"),
      duration: t("process.steps.4.duration")
    },
    {
      icon: FileSpreadsheet,
      title: t("process.steps.5.title"),
      description: t("process.steps.5.description"),
      duration: t("process.steps.5.duration")
    },
    {
      icon: Sparkles,
      title: t("process.steps.6.title"),
      description: t("process.steps.6.description"),
      duration: t("process.steps.6.duration")
    }
  ];

  const mappingOutputs = [
    {
      icon: FileText,
      title: t("outputs.items.0.title"),
      description: t("outputs.items.0.description")
    },
    {
      icon: TrendingUp,
      title: t("outputs.items.1.title"),
      description: t("outputs.items.1.description")
    },
    {
      icon: FileSearch,
      title: t("outputs.items.2.title"),
      description: t("outputs.items.2.description")
    },
    {
      icon: AlertTriangle,
      title: t("outputs.items.3.title"),
      description: t("outputs.items.3.description")
    }
  ];

  const benefits = t("benefits.items", { returnObjects: true });

  const stats = [
    { icon: Clock, value: t("stats.items.0.value"), label: t("stats.items.0.label") },
    { icon: Award, value: t("stats.items.1.value"), label: t("stats.items.1.label") },
    { icon: Users, value: t("stats.items.2.value"), label: t("stats.items.2.label") },
    { icon: CheckCircle, value: t("stats.items.3.value"), label: t("stats.items.3.label") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle max-w-7xl mx-auto animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
              <Search className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              {t("hero.badge")}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display mb-4 sm:mb-6 leading-tight">
              {t("hero.title")}
              <span className="text-gradient block mt-1 sm:mt-2">
                {t("hero.titleHighlight")}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Objectives Section */}
      <section className="section-padding animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
                <Target className="icon-small mr-2" />
                {t("objectives.badge")}
              </div>
              
              <h2 className="heading-2 text-primary mb-4 sm:mb-6">
                {t("objectives.title")}
              </h2>
              
              <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
                {t("objectives.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {mappingObjectives.map((objective, index) => {
                const Icon = objective.icon;
                return (
                  <Card key={index} className="group relative bg-white border border-subtle hover:border-primary-medium hover:shadow-xl transition-all duration-300 card-padding animate-card">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="icon-medium lg:icon-large text-white" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="heading-5 text-foreground mb-3 sm:mb-4">
                      {objective.title}
                    </h3>
                    
                    <p className="text-body-small text-muted-foreground">
                      {objective.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mapping Components Section */}
      <section className="section-padding bg-muted/30 animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
                <Zap className="icon-small mr-2" />
                {t("components.badge")}
              </div>
              
              <h2 className="heading-2 text-primary mb-4 sm:mb-6">
                {t("components.title")}
              </h2>
              
              <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
                {t("components.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {mappingComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <Card key={index} className="bg-white border border-subtle hover:shadow-lg transition-all duration-300 card-padding animate-card">
                    <div className="flex items-start space-x-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="icon-small sm:icon-medium text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-5 text-foreground mb-2">
                          {component.title}
                        </h3>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 sm:space-y-3">
                      {component.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-body-small">
                          <CheckCircle className="icon-small text-primary flex-shrink-0 mt-0.5 mr-3" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="section-padding bg-background animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary/20">
                <CheckCircle className="icon-small mr-2" />
                {t("process.badge")}
              </div>
              
              <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
                {t("process.title")}
              </h2>
              
              <p className="text-body-large text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {t("process.description")}
              </p>
            </div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connection Line - Hidden on mobile */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
              
              <div className="space-y-8 lg:space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`flex flex-col lg:flex-row items-center gap-6 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <h3 className="heading-5 font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-body text-muted-foreground mb-2 leading-relaxed">
                          {step.description}
                        </p>
                        <span className="inline-flex items-center text-body-small text-primary font-semibold">
                          <ArrowRight className="icon-small mr-1" />
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10 border-4 border-primary/10">
                        <step.icon className="icon-large text-primary" />
                      </div>
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-body-small z-20">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content (other side) */}
                    <div className="flex-1 hidden lg:block">
                      {/* Empty space for alternating layout */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="inline-block card-padding bg-white rounded-2xl">
                <h3 className="heading-6 font-bold text-foreground mb-2">
                  {t("processCta.title")}
                </h3>
                <p className="text-body text-muted-foreground mb-4">
                  {t("processCta.description")}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  {t("processCta.button")}
                  <ArrowRight className="ml-2 icon-small" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Output & Benefits Section */}
      <section className="section-padding bg-muted/30 animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            {/* Mapping Outputs */}
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
                  <FileText className="icon-small mr-2" />
                  {t("outputs.badge")}
                </div>
                
                <h2 className="heading-2 text-primary mb-4 sm:mb-6">
                  {t("outputs.title")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mappingOutputs.map((output, index) => {
                  const Icon = output.icon;
                  return (
                    <Card key={index} className="bg-white border border-subtle hover:shadow-lg transition-all duration-300 card-padding text-center animate-card">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <Icon className="icon-medium text-primary" />
                      </div>
                      
                      <h3 className="heading-6 text-foreground mb-2 sm:mb-3">
                        {output.title}
                      </h3>
                      
                      <p className="text-body-small text-muted-foreground">
                        {output.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Direct Benefits */}
            <Card className="bg-white border border-primary-subtle animate-card">
              <div className="card-padding lg:card-padding-large text-center">
                <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
                  <Award className="icon-small mr-2" />
                  {t("benefits.badge")}
                </div>
                
                <h2 className="heading-2 text-primary mb-6 sm:mb-8">
                  {t("benefits.title")}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center text-center">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="icon-small text-primary flex-shrink-0 mt-1" />
                        <span className="text-body text-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="heading-2 text-primary mb-4 sm:mb-6">
                {t("stats.title")}
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center card-padding bg-white border border-subtle animate-card">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Icon className="icon-medium lg:icon-large text-primary" />
                    </div>
                    <div className="heading-4 xl:heading-2 text-foreground mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-body-small lg:text-body text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30 animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <Card className="max-w-4xl mx-auto card-padding lg:card-padding-large bg-white border border-primary-subtle animate-card">
              <div className="text-center">
                <h3 className="heading-3 text-primary mb-3 sm:mb-4">
                  {t("cta.title")}
                </h3>
                <p className="text-body text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                  {t("cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="btn-gradient-brand shadow-brand text-body font-semibold px-6 sm:px-8 group w-full sm:w-auto">
                    <Phone className="mr-2 icon-small" />
                    {t("cta.primaryButton")}
                    <ArrowRight className="ml-2 icon-small group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-body font-semibold px-6 sm:px-8 border-2 bg-white w-full sm:w-auto">
                    <FileText className="mr-2 icon-small" />
                    {t("cta.secondaryButton")}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IpoMapping;