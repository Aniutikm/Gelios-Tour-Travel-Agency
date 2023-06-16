namespace Travel_Agency_project;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllersWithViews();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddCors();
        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        // Configure your application startup by adding app.UseCors() in the application startup code.
        // If there are calls to app.UseRouting()
        // and app.UseEndpoints(...), the call to app.UseCors() must go between them.


        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseRouting();
        app.UseCors(builder =>
        {
            builder
                .WithOrigins("http://angularspa.azurewebsites.net",
                    "https://angularspa.azurewebsites.net",
                    "http://localhost:44400",
                    "https://localhost:44400",
                    "http://localhost:39998",
                    "https://localhost:39998")
                .SetIsOriginAllowedToAllowWildcardSubdomains()
                .AllowAnyHeader()
                .AllowCredentials()
                .WithMethods("GET", "PUT", "POST", "DELETE", "OPTIONS")
                .SetPreflightMaxAge(TimeSpan.FromSeconds(3600));
        });

        app.UseSwagger();
        app.UseSwaggerUI(options =>
        {
            options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
            options.RoutePrefix = string.Empty;
        });
        app.MapControllerRoute(
            name: "default",
            pattern: "{controller}/{action=Index}/{id?}");

        app.MapFallbackToFile("index.html");


        app.Run();
    }
}