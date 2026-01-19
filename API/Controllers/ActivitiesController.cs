using System;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using static Application.Activities.Queries.GetActivityList;

namespace API.Controllers;

public class ActivitiesController(AppDBContext context, IMediator mediator) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Activity>>> GetActivities()
    {
        return await mediator.Send(new Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(string id)
    {
        var act = await context.Activities.FindAsync(id);
        return act is null ? BadRequest("No activity with such id") : act;
    }
}
