using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using BackEnd.Model;


var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddDbContext<DataContext>(OptionsBuilderConfigurationExtensions => OptionsBuilderConfigurationExtensions.UseNpgsql("Host=localhost;Port=5434;Database=example;Username=postgres;Password=password"));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(o => o.AddPolicy("MyPolicy", builder => {
    builder
    .SetIsOriginAllowed(_ => true)
    .AllowCredentials()
    .AllowAnyMethod()
    .AllowAnyHeader();
}));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Issuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
});


var app = builder.Build();

using (var scope = ((IApplicationBuilder)app).ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
using (var context = scope.ServiceProvider.GetService<DataContext>()) context?.Database.EnsureCreated();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();  

}
app.UseCors("MyPolicy");

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

